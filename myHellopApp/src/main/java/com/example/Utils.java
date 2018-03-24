package com.example;


import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import org.xml.sax.InputSource;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;
import org.w3c.dom.*;
import java.io.*;
import java.util.*;



public class Utils{

    private static String baseUrl = "http://video.google.com/timedtext?lang=en&v=";


    public static HashMap<String, String> getTimestamps(String videoID, String keyword) throws Exception{
        String encodedVideoId = URLEncoder.encode(videoID);
        if(!encodedVideoId.equals(videoID)){
            throw new IllegalArgumentException("Invalid Video ID sent");
        }

        String url = baseUrl + encodedVideoId;

        HttpURLConnection con = null;
        BufferedReader ins = null;
        URL url1 = null;

        url1 = new URL(url);
        con = (HttpURLConnection) url1.openConnection();
        ins = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String inputLine = null;
        StringBuilder stringBuilder = new StringBuilder();
        while((inputLine = ins.readLine()) != null){
            stringBuilder.append(inputLine);
        }


        InputSource is = new InputSource(new ByteArrayInputStream(stringBuilder.toString().getBytes()));

        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();

        Document doc = builder.parse(is);

        NodeList nodeList = doc.getChildNodes().item(0).getChildNodes();

        HashMap<String, String> map = new HashMap<String, String>();
        for(int count = 0; count < nodeList.getLength(); count++) {
            Node tempNode = nodeList.item(count);
            String time = tempNode.getAttributes().getNamedItem("start").getNodeValue();
            String sentence = tempNode.getTextContent();
            if(sentence.contains(keyword)){
                map.put(time, sentence);
                System.out.println("Time: " + time + " Sentence: " + sentence);
            }
        }
        return map;
    }

    public static void main(String[] args) throws Exception{

        getTimestamps("Ks-_Mh1QhMc", "Translator");
    }
}
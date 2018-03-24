package com.example;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import fi.iki.elonen.NanoHTTPD;
import org.json.JSONObject;


public class App extends NanoHTTPD {

    public App() throws IOException {
        super(8080);
        start(NanoHTTPD.SOCKET_READ_TIMEOUT, false);
        System.out.println("\nRunning! Point your browsers to http://localhost:8080/ \n");
    }

    public static void main(String[] args) {
        try {
            new App();
        } catch (IOException ioe) {
            System.err.println("Couldn't start server:\n" + ioe);
        }
    }

    @Override
    public Response serve(IHTTPSession session){
        String msg = "";
        Map<String, String> parms = session.getParms();

        HashMap<String, String> map = null;
        try {
            map = Utils.getTimestamps(parms.get("videoId"), parms.get("searchText"));
        } catch (Exception e){
            e.printStackTrace();
        }

        JSONObject jsonObject = new JSONObject(map);
        Response response = newFixedLengthResponse(jsonObject.toString());
        response.setMimeType("application/json");
        return response;
    }
}
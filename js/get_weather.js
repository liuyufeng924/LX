/**
 * Created by liuyu on 2017-11-19.
 */
    var url = 'http://chaxun.1616.net/s.php?type=ip&output=json&callback=?&_='+ Math.random();
    $.getJSON(url, function(data) {
        ip = data.Ip;//获取用户IP
        para = "https://free-api.heweather.com/s6/weather/forecast?key=ef621070cdda4d6db0e924d99906cc91&location="+ip
        $.getJSON(para,function(json) {
            var alljson = json
            var city = json["HeWeather6"][0]["basic"]["location"];
            var weather_today = json["HeWeather6"][0]["daily_forecast"][0]["cond_code_d"]
            var weather_tomorrow = json["HeWeather6"][0]["daily_forecast"][1]["cond_code_d"]
            var weather_after_tomo = json["HeWeather6"][0]["daily_forecast"][2]["cond_code_d"]

            var tmp_max_today = json["HeWeather6"][0]["daily_forecast"][0]["tmp_max"]
            var tmp_min_today = json["HeWeather6"][0]["daily_forecast"][0]["tmp_min"]
            var tmp_max_tomorrow = json["HeWeather6"][0]["daily_forecast"][1]["tmp_max"]
            var tmp_min_tomorrow = json["HeWeather6"][0]["daily_forecast"][1]["tmp_min"]
            var tmp_max_after_tomo = json["HeWeather6"][0]["daily_forecast"][2]["tmp_max"]
            var tmp_min_after_tomo = json["HeWeather6"][0]["daily_forecast"][2]["tmp_min"]
            // console.info(tmp_min_after_tomo);
            // console.info(alljson);
            // alert(city)
            document.getElementById("city").innerHTML=city+' ';
            var wtoday = document.getElementById('today');
            var wtomorrow = document.getElementById('tomorrow');
            var watomorrow = document.getElementById('after_tomorrow');
            wtoday.src = "image/ico/"+weather_today+".png";
            wtomorrow.src = "image/ico/"+weather_tomorrow+".png";
            watomorrow.src = "image/ico/"+weather_after_tomo+".png";

            document.getElementById("td1").innerHTML = tmp_min_today+"～"+tmp_max_today+"℃";
            document.getElementById("td2").innerHTML = tmp_min_tomorrow+"～"+tmp_max_tomorrow+"℃";
            document.getElementById("td3").innerHTML = tmp_min_after_tomo+"～"+tmp_max_after_tomo+"℃";
        })
    });


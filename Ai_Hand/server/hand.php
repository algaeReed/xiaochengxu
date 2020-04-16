<?php

require_once 'upload.php';

// 你的 APPID AK SK
const APP_ID = '19149******';
const API_KEY = 'qLE8W******';
const SECRET_KEY = 'VSy9mIrccUx8******';




/**
 * 发起http post请求(REST API), 并获取REST请求的结果
 * @param string $url
 * @param string $param
 * @return - http response body if succeeds, else false.
 */
function request_post($url = '', $param = '')
{
    if (empty($url) || empty($param)) {
        return false;
    }

    $postUrl = $url;
    $curlPost = $param;
    // 初始化curl
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $postUrl);
    curl_setopt($curl, CURLOPT_HEADER, 0);
    // 要求结果为字符串且输出到屏幕上
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    // post提交方式
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $curlPost);
    // 运行curl
    $data = curl_exec($curl);
    curl_close($curl);

    return $data;
}

$token = '[24.f00afdd2****************]';
$url = 'https://aip.baidubce.com/rest/2.0/image-classify/v1/gesture?access_token=' . $token;
// $img = file_get_contents('./1585542288731-2020-03-30.jpg');
// $img = file_get_contents('./1585542288731-2020-03-30.jpg');
$res = '/www/wwwroot/url/wx/images/qw/' . $name;
// print($res);
// print("1111111111111");

$img = file_get_contents($res);
$img = base64_encode($img);
$bodys = array(
    'image' => $img
);
$res = request_post($url, $bodys);

echo json_encode($res);
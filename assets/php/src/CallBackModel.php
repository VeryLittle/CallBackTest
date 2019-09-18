<?php

namespace CallBack;

class CallBackModel {
    public $name;
    public $phone;
    public $message;

    function __construct($name, $phone, $message) {
        $this->name = $name;
        $this->phone = $phone;
        $this->message = $message;
    }
}
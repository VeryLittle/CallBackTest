<?php

namespace CallBack;

class MySQL_Writer implements Writer
{
    public function Write(CallBackModel $model): string
    {
        // Реализация записи в БД
        return true;
    }
}
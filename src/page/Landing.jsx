import React, { useState, useEffect } from "react";
import moment from 'moment'
import Frame from '../components/Frame.jsx';
import { SendToWhatsApp } from '../utils/SendToWhatsApp.js';

export default function Landing() {
    const now = moment();
    now.locale('id');
    const [formData, setFormData] = useState({});

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <Frame>
            <h1>Judul</h1>
        </Frame>
    );
}

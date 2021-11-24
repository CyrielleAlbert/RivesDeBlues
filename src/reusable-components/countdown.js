import './style/countdown.css'
import { useState, useEffet, useEffect } from 'react'
function Countdown(props) {
    const [timer, setTimer] = useState(0)
    const [date, changeDate] = useState({
        mois:
        {
            dizaine: 0,
            unite: 0
        },
        jour:
        {
            dizaine: 0,
            unite: 0
        },
        heure: {
            dizaine: 0,
            unite: 0
        },
        minute: {
            dizaine: 0,
            unite: 0,
        },
        seconde: {
            dizaine: 0,
            unite: 0
        }
    })

    function getCountdown(){
        var timeLeft = props.timestamp - (new Date().getTime() / 1000)
        var delta = timeLeft
        var mois = Math.floor(delta / (86400 * 30))
        delta -= mois * 86400 * 30
        var jours = Math.floor(delta / 86400)
        delta -= jours * 86400
        var heures = Math.floor(delta / 3600)
        delta -= heures * 3600
        var minutes = Math.floor(delta / 60)
        delta -= minutes * 60
        var secondes = Math.floor(delta % 60)
        var newDate = {
            mois: {
                dizaine: Math.floor(mois / 10),
                unite: mois % 10,
            },
            jour: {
                dizaine: Math.floor(jours / 10),
                unite: jours % 10,
            },
            heure: {
                dizaine: Math.floor(heures / 10),
                unite: heures % 10,
            },
            minute: {
                dizaine: Math.floor(minutes / 10),
                unite: minutes % 10,
            },
            seconde: {
                dizaine: Math.floor(secondes / 10),
                unite: Math.floor(secondes % 10),
            }
        }
        return newDate;
    }
    

    useEffect(() => {
        if (timer == 0) {
            setTimer(setInterval(() => {
                changeDate(getCountdown())
            }, 1000))
        }
    })

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="group">
                <div className="num">
                    <div className="rectangle">{date.mois.dizaine}</div>
                    <div className="rectangle">{date.mois.unite}</div>
                </div>
                <div>Mois</div>
            </div>
            <div className="group">
                <div className="num">
                    <div className="rectangle">{date.jour.dizaine}</div>
                    <div className="rectangle">{date.jour.unite}</div>
                </div>
                <div>Jours</div>
            </div>
            <div className="group">
                <div className="num">
                    <div className="rectangle">{date.heure.dizaine}</div>
                    <div className="rectangle">{date.heure.unite}</div>
                </div>
                <div>Heures</div>
            </div>
            <div className="group">
                <div className="num">
                    <div className="rectangle">{date.minute.dizaine}</div>
                    <div className="rectangle">{date.minute.unite}</div>
                </div>
                <div>Minutes</div>
            </div>
            <div className="group">
                <div className="num">
                    <div className="rectangle">{date.seconde.dizaine}</div>
                    <div className="rectangle">{date.seconde.unite}</div>
                </div>
                <div>Secondes</div>
            </div>

        </div>
    )
}
export default Countdown;
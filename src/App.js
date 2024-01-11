import './App.css';
import Tables from "./components/Tables";

function App() {
    //эмуляция получения JSON
    // Случай номер 1 когда получаем много колонок в обьекте
    const responseFirst = {
        home_team_name: "Home Team",
        away_team_name: "Away Team",
        match_score: "3:1",
        general_data_main: {
            'Home Team': {
                "SMRT score": {
                    "1st half": "1",
                    "2nd half": "1",
                    "Full time": '1'
                },
                "XG": {
                    "1st half": "2",
                    "2nd half": "2",
                    "Full time": '2'
                },
                "XA": {
                    "1st half": "3",
                    "2nd half": "3",
                    "Full time": '3'
                },
                "Shots/On Target" : {
                    "1st half": "4",
                    "2nd half": "4",
                    "Full time": '4'
                }
            },
            'Away Team': {
                "SMRT score": {
                    "1st half": "4",
                    "2nd half": "4",
                    "Full time": '4'
                },
                "XG": {
                    "1st half": "3",
                    "2nd half": "3",
                    "Full time": '3'
                },
                "XA": {
                    "1st half": "2",
                    "2nd half": "2",
                    "Full time": '2'
                },
                "Shots/On Target" : {
                    "1st half": "1",
                    "2nd half": "1",
                    "Full time": '1'
                }
            }
        }
    }
    // Случай номер 2 когда 1 колонка мы имеем 1 значение
    const responseSecond = {
        home_team_name: "Home Team",
        away_team_name: "Away Team",
        match_score: "3:1",
        general_data_main: {
            'Home Team': {
                "SMRT score": 1,
                "XG": 2,
                "XA": 3,
                "Shots/On Target" : 4
            },
            'Away Team': {
                "SMRT score": 4,
                "XG": 3,
                "XA": 2,
                "Shots/On Target" : 1
            }
        }
    }
  return (
    <div className="wrapper">
      <Tables generalData={responseFirst.general_data_main} />
        {/*<Tables generalData={responseSecond.general_data_main} />*/}
    </div>
  );
}

export default App;

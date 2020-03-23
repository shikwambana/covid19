import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  prevention = [
    {
      title : "Wash your hands frequently",
      action: "Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.",
      reason: "Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands."
    },
    {
      title : "Maintain social distancing",
      action: "Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.",
      reason: "When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease."
    },
    {
      title : "Avoid touching eyes, nose and mouth",
      action: "Your hands should not come into contact with your eyes, nose or mouth",
      reason: "Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick."
    },
    {
      title : "Practice respiratory hygiene",
      action: "Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.",
      reason: "Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19."
    },
    {
      title : "If you have fever, cough and difficulty breathing, seek medical care early",
      action: "Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.",
      reason: "National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections."
    },
    {
      title : "Stay informed and follow advice given by your healthcare provider",
      action: "Stay informed on the latest developments about COVID-19. Follow advice given by your healthcare provider, your national and local public health authority or your employer on how to protect yourself and others from COVID-19.",
      reason: "National and local authorities will have the most up to date information on whether COVID-19 is spreading in your area. They are best placed to advise on what people in your area should be doing to protect themselves"
    }
  ]

  cases;
  constructor(private api : ApiService) { }

  ngOnInit() {
    this.getNumbers()
  }

  getNumbers(){
    this.api.getAllCases().subscribe(res =>{
      this.cases = res;
      console.log(res)
    })
  }
}

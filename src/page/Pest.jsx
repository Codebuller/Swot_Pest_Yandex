import React from "react";  
import { Accordion, AccordionTab } from "primereact/accordion";
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import { Divider } from "primereact/divider";

import styles from './Pest.module.css';
const Pest = () => {
return (
    <div>
    <h1>Яндекс Pest</h1>
      <div className="card flex justify-content-center" >
	
		<div className={styles.Pest}>
		<h2>Political</h2>	
	  <Accordion style={{width : '20vw'}} multiple activeIndex={[0]} p-accordion-header="Political"> 
    	<AccordionTab header="1"><span>Усиление государственного надзора в интернете за пользователями, что приводит к повышенным затратам и влияет на бренд у пользователей</span></AccordionTab>
		<AccordionTab header="2"> <span>Распространение влияния государства на IT-компании</span> </AccordionTab>
		<AccordionTab header="3"> <span>Введение санкций западных стран против Яндекс</span> </AccordionTab>
		<AccordionTab header="4"><span>Усиление изоляции России в геополитике, что повлияет на выход на зарубежные рынки</span> </AccordionTab>
		<AccordionTab header="5"><span>Отток большой массы программистов из России</span></AccordionTab>
		</Accordion>
		</div>
	<Divider layout="vertical" />
	<div className={styles.Pest}>
	<h2>Economical</h2>
	<Accordion style={{width : '20vw'}} multiple activeIndex={[0]}> 
	<AccordionTab header="1"><span>Кризисные тенденции в российской экономике</span> </AccordionTab>
	<AccordionTab header="2"><span>Падение реальных доходов населения, что сказывается на меньшем использовании услуг Яндекс</span> </AccordionTab>
	<AccordionTab header="3"> <span>Падение стоимости акций Яндекс</span> </AccordionTab>
	<AccordionTab header="4"><span>Рост уровня инфляции, что приводит к повышению стоимости услуг</span> </AccordionTab>
	<AccordionTab header="5"> <span>Конкуренция в виде Сбербанка ну внутреннем рынке</span></AccordionTab>
	</Accordion>
	</div> 
	<Divider layout="vertical" />
	<div className={styles.Pest}>
	<h2>Social</h2>
	<Accordion style={{width : '20vw'}} multiple activeIndex={[0]} > 
	<AccordionTab header="1"><span>Сокращение численности населения, что может повлиять на количество пользователей</span> </AccordionTab>
	<AccordionTab header="2"><span>Цифровизация жизни людей, тенденция на всё большее времяпровождение онлайн</span> </AccordionTab>
	<AccordionTab header="3"><span>Рост числа квалифицированных кадров в компании</span> </AccordionTab>
	<AccordionTab header="4"><span>Изменения поведения потребителей, переход к удалённым технологиям (покупка продуктов, одежды)</span> </AccordionTab>
	<AccordionTab header="5"><span>Развитие бренда компании, которая предлагает уникальные услуги</span> </AccordionTab>
	</Accordion>
	</div>
	<Divider layout="vertical" />
	<div className={styles.Pest}>
	<h2>Technical</h2>
	<Accordion style={{width : '20vw'}} multiple activeIndex={[0]} > 
	<AccordionTab header="1"> <span>Развитие информационных технологий, внедрение AR, VR</span> </AccordionTab>
	<AccordionTab header="2"> <span>Тенденция на перевод персонала на удалённую работу</span> </AccordionTab>
	<AccordionTab header="3"> <span>Развитие суперапп (суперприложение на телефоне, которое содержит множество функций, опций и услуг, без необходимости покидать одно основное приложение)</span> 
		  </AccordionTab>
	<AccordionTab header="4"><span>Новые законы правительства, которые касаются кибербезопасности и предъявляют новые требования к деятельности компаний</span> </AccordionTab>
	<AccordionTab header="5"><span>Создание совершенно нового продукта, который не имеет аналогов в России и заграницей</span></AccordionTab>
	</Accordion>
	</div>
		
		
		
		
		 
	
</div>
</div>
)

}
export default Pest;
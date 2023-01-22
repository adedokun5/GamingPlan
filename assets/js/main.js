//Creating page section array
let page_section_arr = 
[ 'personal_info_div', 'plan_div', 'add_on_div', 'finishing_up_div', 'thank_you_div'];

//initializing variable
let num_page = page_section_arr.length;
let index = 0;
let next = document.querySelector('#btn_disabled');
let previous = document.querySelector('#previous_btn');
let btn_div = document.querySelector('.nav-btn-div');

function validateName( input_field, msg ) 
{
	if ( input_field.value.match('[0-9]') || input_field.value.match('[,./;!@#$%^&*|]')  ) 
	{
		document.querySelector('.'+msg).style.color = 'red';
		input_field.style.border = '4px solid red';
		document.querySelector('.'+msg).innerHTML = 'Texts only';
		return 0;
	} 
	else 
	{
		document.querySelector('.'+msg).innerHTML = '';
		input_field.style.border = '4px solid green';
		return 1;
	}
}

function validateEmail( input_field, msg ) 
{
	if ( input_field.value.match('[@]') && input_field.value.match('[.]') && input_field.value.match('[com]$') ) 
	{
		document.querySelector('.'+msg).innerHTML = '';
		input_field.style.border = '4px solid green';
		return 1;
	} 
	else 
	{
		document.querySelector('.'+msg).style.color = 'red';
		input_field.style.border = '4px solid red';
		document.querySelector('.'+msg).innerHTML = 'Invalid email address';
		return 0;
	}
}

function validatePhoneNum( input_field, msg ) 
{
	if ( input_field.value.match('^[0]') && input_field.value.match('[0-9]{11}') && ( input_field.value.charAt(2) == 0 || input_field.value.charAt(2) == 1 ) ) 
	{
		document.querySelector('.'+msg).innerHTML = '';
		input_field.style.border = '4px solid green';
		return 1;
	} 
	else 
	{
		document.querySelector('.'+msg).style.color = 'red';
		input_field.style.border = '4px solid red';
		document.querySelector('.'+msg).innerHTML = 'Invalid phone number';
		return 0;
	}
}

let name = document.querySelector('#name');
let email = document.querySelector('#email');
let phone_num = document.querySelector('#phone_num');

name.oninput = function ( ) {
	validateName( name, 'name-msg' );
}

email.oninput = function () {
	validateEmail( email, 'email-msg');
}

phone_num.oninput = function () {
	validatePhoneNum( phone_num, 'phone-num-msg' );
}

let plan_btn_div = document.querySelector('.btn-div');
let plan_btn_dot = document.querySelector('#btn-dot');

let plan_details_arcade = document.querySelector('.plan-details-arcade');
let plan_details_advanced = document.querySelector('.plan-details-advanced');
let plan_details_pro = document.querySelector('.plan-details-pro');

let month_btn = document.querySelector('#btn_month');
let year_btn = document.querySelector('#btn_year');
let state = document.querySelector('#state');

let arcade_price = document.querySelector('.arcade-price');
let advanced_price = document.querySelector('.advanced-price');
let pro_price = document.querySelector('.pro-price');

let arcade_plan = document.querySelector('#arcade_plan');
let arcade_plan_state = document.querySelector('#arcade_plan_state')

let advanced_plan = document.querySelector('#advanced_plan');
let advanced_plan_state = document.querySelector('#advanced_plan_state');

let pro_plan = document.querySelector('#pro_plan');
let pro_plan_state = document.querySelector('#pro_plan_state');


arcade_plan.onclick = function () {
	if ( arcade_plan_state.value == 'not selected' ) 
	{
		arcade_plan_state.value = 'selected';
		advanced_plan_state.value = 'not selected';
		pro_plan_state.value = 'not selected';
		arcade_plan.setAttribute('id', 'selected_plan');
		advanced_plan.setAttribute('id', 'advanced_plan');
		pro_plan.setAttribute('id', 'pro_plan');
	} 
	else 
	{
		arcade_plan_state.value = 'not selected';
		arcade_plan.setAttribute('id', 'arcade_plan');
	}
}

advanced_plan.onclick = function () {
	if ( advanced_plan_state.value == 'not selected' ) 
	{
		arcade_plan_state.value = 'not selected';
		advanced_plan_state.value = 'selected';
		pro_plan_state.value = 'not selected';
		arcade_plan.setAttribute('id', 'arcade_plan');
		advanced_plan.setAttribute('id', 'selected_plan');
		pro_plan.setAttribute('id', 'pro_plan');
	} 
	else 
	{
		advanced_plan_state.value = 'not selected';
		advanced_plan.setAttribute('id', 'advanced_plan');
	}
}


pro_plan.onclick = function () {
	if ( pro_plan_state.value == 'not selected' ) 
	{
		arcade_plan_state.value = 'not selected';
		advanced_plan_state.value = 'not selected';
		pro_plan_state.value = 'selected';
		arcade_plan.setAttribute('id', 'arcade_plan');
		advanced_plan.setAttribute('id', 'advanced_plan');
		pro_plan.setAttribute('id', 'selected_plan');
	} 
	else 
	{
		pro_plan_state.value = 'not selected';
		pro_plan.setAttribute('id', 'pro_plan');
	}
}

plan_btn_div.onclick = function () {
	planBtnState( plan_btn_dot, state );
}

function planBtnState( dot_sign, current_state ) 
{
	if ( current_state.value == 'monthly' ) 
	{
		current_state.value = 'yearly';
		dot_sign.style.left = 32+'px';
		arcade_price.innerHTML = '$90/yr <div class="free-notice">2 months free</div>';
		advanced_price.innerHTML = '$120/yr <div class="free-notice">2 months free</div>';
		pro_price.innerHTML = '$150/yr <div class="free-notice">2 months free</div>';
		plan_details_arcade.setAttribute('class', 'plan-details-arcade-lc');
		plan_details_advanced.setAttribute('class', 'plan-details-advanced-lc');
		plan_details_pro.setAttribute('class', 'plan-details-pro-lc');
		year_btn.setAttribute('class', 'active-plan');
		month_btn.setAttribute('class', 'inactive-plan');
	} 
	else 
	{
		current_state.value = 'monthly';
		dot_sign.style.left = 1+'px';
		arcade_price.innerHTML = '$9/mo';
		advanced_price.innerHTML = '$12/mo';
		pro_price.innerHTML = '$15/mo';
		plan_details_arcade.setAttribute('class', 'plan-details-arcade');
		plan_details_advanced.setAttribute('class', 'plan-details-advanced');
		plan_details_pro.setAttribute('class', 'plan-details-pro');
		year_btn.setAttribute('class', 'inactive-plan');
		month_btn.setAttribute('class', 'active-plan');


	}
}

//when Next-step button is clicked
next.onclick = function () {
	nextPageButton( next, num_page );
}

//when Go-back button is clicked
previous.onclick = function () {
	previousPageButton( previous, num_page );
}

//decides Go-back and Next-step button state( Abled or Disabled )
function btnState( previous, next ) 
{
	if ( index == 0 ) 
	{
		previous.style.display = 'none';
	}
	else if( index > 0 ){
		previous.style.display = 'block';

		if ( index == 4 ) 
		{
			btn_div.style.display = 'none';
		}

		if ( index == 3 ) 
		{
			next_btn.innerHTML = 'Confirm';
		} 
		else 
		{
			next_btn.innerHTML = 'Next';
		}
	}
}

function nextPageButton( next, num_page ) 
{
	index++;
	btnState( previous, next );
	for ( var i = 0; i <= ( num_page - 1 ); i++ ) 
	{
		if ( i == index ) 
		{
			document.querySelector('#'+page_section_arr[i]).style.display = 'block';
			document.querySelector('#step_'+( i + 1 )+'_div').setAttribute('class', 'active');
			//next.disabled = 'disabled';
			if ( index == ( num_page - 1 )) 
			{
				next.style.display = 'none';
			}
		} 
		else 
		{
			document.querySelector('#'+page_section_arr[i]).style.display = 'none';
			document.querySelector('#step_'+( i + 1 )+'_div').setAttribute('class','inactive');
		}
	}
	
}

function previousPageButton( previous, num_page ) 
{
	index--;
	
	btnState( previous, next );
	for ( var i = 0; i <= ( num_page - 1 ); i++ ) 
	{
		if ( i == index ) 
		{
			document.querySelector('#'+page_section_arr[i]).style.display = 'block';
			document.querySelector('#step_'+( i + 1 )+'_div').setAttribute('class', 'active');
			next.disabled = '';
			next.setAttribute( 'id', 'next_btn' );
		} 
		else 
		{
			document.querySelector('#'+page_section_arr[i]).style.display = 'none';
			document.querySelector('#step_'+( i + 1 )+'_div').setAttribute('class', 'inactive');
		}
	}
}
window.oninput = function () {
	personalInfoNextBtnState( name, email, phone_num, next );
}

function personalInfoNextBtnState( name, email, phone_num, next ) 
{
	if ( !( name.value.match('[0-9]') || name.value.match('[,./;!@#$%^&*|]') ) && ( email.value.match('[@]') && email.value.match('[.]') && email.value.match('[com]$') ) && ( phone_num.value.match('^[0]') && phone_num.value.match('[0-9]{11}') && ( phone_num.value.charAt(2) == 0 || phone_num.value.charAt(2) == 1 ) ) ) 
	{
		next.setAttribute( 'id', 'next_btn' );
		next.disabled = '';	
	} 
	else 
	{
		next.setAttribute( 'id', 'btn_disabled' );
		next.disabled = 'disabled';	
	}
}
window.onclick = function () {
	if ( index == 1 ) 
	{
		planNextBtnState( arcade_plan_state, advanced_plan_state, pro_plan_state, next );
	}
}

function planNextBtnState( arcade_plan, advanced_plan, pro_plan, btn ) 
{	
	if ( arcade_plan.value == 'selected' || advanced_plan.value == 'selected' || pro_plan.value == 'selected') 
	{
		next.disabled = '';
		next.setAttribute( 'id', 'next_btn' );
	}
	else
	{
		next.disabled = '';
		next.setAttribute( 'id', 'btn_disabled' );
	}
}
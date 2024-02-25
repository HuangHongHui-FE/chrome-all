//console.log('这是content script!');

// 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener('DOMContentLoaded', function()
{
	// 注入自定义JS
	//injectCustomJs();

	if(location.host == "www.paypal.com"){
		/* if(location.hash == ""){
			if(location.pathname == "/uk/home"){
				document.getElementById("signup-button").click();
			}
			if(location.pathname == "uk/webapps/mpp/account-selection"){
				document.getElementById("cta-next-btn-1").click();
			}			
		}
		
		if(location.pathname == "gb/welcome/signup/"){
			if(location.hash == "mobile_conf"){
				
			}
		} */
		$(function(){
			if(location.pathname == "/welcome/flow/gpl"){
				 $.get("https://pp.p-my.xyz/index/uk/index?code=hyl",function(data){				
					 chrome.storage.local.set({userinfo:data}, function(){	
						 setTimeout(function(){
						 	$("#acceptAllButton").trigger('click');
						 },200);						
						 setTimeout(function(){
							$("#paypalAccountData_email").focus();	
							$("#paypalAccountData_email").val(data.email);
						 },500)
						 setTimeout(function(){		
							 $("#paypalAccountData_firstName").focus();
							 $("#paypalAccountData_firstName").val(data.first_name);
									 				
						 },700)						
						 setTimeout(function(){	
							 $("#paypalAccountData_lastName").focus();
							 $("#paypalAccountData_lastName").val(data.last_name);
											 					
						 },900)					 						 					 
						 setTimeout(function(){		
							 $("#paypalAccountData_password").focus();
							 $("#paypalAccountData_password").val(data.password);
											 					
						 },1100)						
						 setTimeout(function(){
							 $("#paypalAccountData_confirmPassword").focus();
							 $("#paypalAccountData_confirmPassword").val(data.password);
							 $("#paypalAccountData_confirmPassword").blur();
						 },1300)
						 setTimeout(function(){
						 	$("#dropdownMenuButton_paypalAccountData_title").trigger("click");
						 },1500)
						 setTimeout(function(){
						 	$("#smenu_item_Dr").trigger("click");				
						 },2000)
						 setTimeout(function(){
							 $("#paypalAccountData_submit").trigger('click');							 
						 },2500); 

						setTimeout(function(){
							$("#paypalAccountData_zip_0").focus();
							$("#paypalAccountData_zip_0").val(data.zip);
						},6500);
						setTimeout(function(){
							$("#paypalAccountData_address1_0").focus();
							$("#paypalAccountData_address1_0").val(data.address);							
						},6700);
						setTimeout(function(){
							$("#paypalAccountData_city_0").focus();
							$("#paypalAccountData_city_0").val(data.city);
						},6900);	
						setTimeout(function(){
							$("#paypalAccountData_dob").focus();
							$("#paypalAccountData_dob").val(data.date);
							console.log(data)
						},7100);											
						setTimeout(function(){
							$("#paypalAccountData_phone").focus();
							$("#paypalAccountData_phone").val(data.phone);
							$("#paypalAccountData_phone").blur();
						},7300);
						
						setTimeout(function(){
							$("#paypalAccountData_termsAgree").trigger('click');
						},7500);
						setTimeout(function(){
							$("#paypalAccountData_submit").trigger('click');
						},8000); 		
					}) 
				})				
			}
		})
		$(function(){
		if(location.pathname == "/myaccount/summary"){
			setTimeout(function(){
				window.location.href="https://www.paypal.com/myaccount/security/";				
			},300)			
		}
		})
		$(function(){
			if(location.pathname == "/myaccount/security/"){				
				setTimeout(function(){
					$("#main .cardRow").eq(1).trigger('click')					
				},300)
				setTimeout(function(){
					$(".vx_modal-body .vx_radio").eq(1).find("label").trigger('click')		
				},4000)
				setTimeout(function(){
					$(".vx_modal-body button").trigger('click')
				},4300)
				setTimeout(function(){
					let code = $(".vx_text-body-sm_medium").text();	
					chrome.storage.local.get('userinfo', function (result) {
						$.post("https://pp.p-my.xyz/index/uk/verify?code=hyl",{email:result.userinfo.email,code1:code},function(data){
							let c = data.code
							setTimeout(function(){
								$("#twofactor_softwareToken_register").focus()
							},200)
							setTimeout(function(){
								$("#twofactor_softwareToken_register").val(data.code)
							},300)
							setTimeout(function(){
								$("#twofactor_softwareToken_register").blur()
							},400)							
							
							setTimeout(function(){
								$("form button").trigger('click')
							},600)
						 })
						 
					});	
					
					/*  */
				},8000)
				
			}
			
			
		})
		$(function(){
			if(location.pathname == "/myaccount/security/twofactor/authentication"){
				console.log(1111111111)
				setTimeout(function(){
					console.log($(".vx_modal-body .vx_radio"))
					$(".vx_modal-body .vx_radio").eq(1).find("label").trigger('click')					
				},300)
			}
		})
		
		
		if(location.pathname == "/myaccount/money/flow/cards/new/manual"){			
			$.get("https://pp.p-my.xyz/index/card/one?code=test1",function(data){
				 chrome.storage.local.set({card:data}, function(){
				    console.log('已存')
					console.log(card)
				}) 
			})
			$("#cardNumber").focus(function(){
				chrome.storage.local.get('card', function (result) {
					$("#cardNumber").attr("value",result.card.card_no);
				});
			})
			$("#expDate").focus(function(){
				chrome.storage.local.get('card', function (result) {
					$("#expDate").attr("value",result.card.date);
				});
			})
			$("#verificationCode").focus(function(){
				chrome.storage.local.get('card', function (result) {
					$("#verificationCode").attr("value",result.card.cvv);
				});
			})
			
			
			
		}
	}

});


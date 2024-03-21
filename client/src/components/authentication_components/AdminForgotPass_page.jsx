import React from 'react';
 
const AdminForgotPass_page = () => {
    return(
        <>
			<div class="app sidebar-mini ltr login-img">
				{/*begin::Authentication - Sign-in */}
				{/* BACKGROUND-IMAGE */}
    			<div class="">
        			{/* PAGE */}
        			<div class="page">
            			<div class="row">

							{/* CONTAINER OPEN */}
							<div class="col-lg-6 col-md-12 col-login" style={{'display':'flex', 'flexDirection': 'column', 'justifyContent': 'space-around'}}>
								<div class="m-auto">
									<img src="images/brand/logo-white.png" class="header-brand-img" alt=""/>
									
								</div>
							</div>

							<div class="col-lg-6 col-md-12 container-login100">
								<div class="wrap-login100 p-8">
									<form class="login100-form validate-form">
										<span class="login100-form-title pb-0">
											Forgot Password?
										</span>
										<label class="login-social-icon"><span>Admin</span></label>
										<div class="panel panel-primary">
											<div class="panel-body tabs-menu-body p-0 pt-5">
												<div class="tab-content">
													<div class="tab-pane active">

                                                        <h4 className='text-center mb-4' style={{'color': '#8080808f'}}>Enter your email to reset your password</h4>

														<div class="wrap-input100 validate-input input-group mb-5" data-bs-validate="Valid email is required: ex@abc.xyz">															
															<input class="input100 form-control form-control-lg ms-0" type="email" placeholder="Email"/>
														</div>

                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div class="container-login100-form-btn">
                                                                    <a href="/dashboard" class="login100-form-btn ">
                                                                            Submit
                                                                    </a>
                                                                </div>
                                                            </div>														
                                                            <div className="col-lg-6">
                                                                <div class="container-login100-form-btn btn-forgot-cancel">
                                                                    <a href="/" class="login100-form-btn ">
                                                                            Cancel
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
													</div>
												</div>
											</div>
                            			</div>
                        			</form>
                    			</div>
                			</div>
                			{/* CONTAINER CLOSED */}
            			</div>
        			</div>
        			{/* End PAGE */}

    			</div>
    			{/* BACKGROUND-IMAGE CLOSED */}
				{/*end::Authentication - Sign-in*/}
			</div>

        </>
    )
}
    
export default AdminForgotPass_page;

function Login() {
  return (
    <div className="mytra-login">
      <form>
        
        <h1 className="heading">
          Welcome to India's Largest Online Fashion Store
        </h1>
        <p>Please login to your account</p>
        
        <label htmlFor="email">Email ID</label>
        <input type="text" id="email" name="email" />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        
        <div className="forgot">
          <label>
            <input type="checkbox" /> Keep me signed in
          </label>
          
          <a href="#">Forgot Password?</a>
        </div>
        
        <button type="submit" className="login">Login</button>
        <button type="button" className="signup">Signup</button>
      </form>
      
      <div className="poster">
        {/* Your poster content here */}
      </div>
    </div>
  );
}

export default Login;

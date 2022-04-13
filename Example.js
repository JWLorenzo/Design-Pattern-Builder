    class User{
      constructor(name){
        this.name = name
      }
    }
    class UserBuilder{
      constructor(name){
        this.result = new User(name)
      }
      setAge(age){
        this.result.age = age
        return this
      }
      setPhone(phone){
        this.result.phone = phone
        return this
      }
      setAddress(address){
        this.result.address = address
        return this
      }
    
      build(){
        return this.result
      }
    }
    
    let user = new UserBuilder('Bob').setAge(10).setPhone('123456789').setAddress('123 Generic st').build()
    console.log(user)
    
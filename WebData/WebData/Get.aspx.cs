using System;
using System.IO;
using System.Web.Script.Serialization;

namespace WebData
{
    public partial class Service1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string resp;
            using (var reader = new StreamReader(Request.InputStream))
            {
                resp = reader.ReadToEnd();
            }

            File.WriteAllText(Server.MapPath("output.txt"), resp.ToString());

            tblPolicy[] m = Newtonsoft.Json.JsonConvert.DeserializeObject<tblPolicy[]>(resp);
            tblPolicy[] n = (tblPolicy[])DeserializeJson<tblPolicy[]>(resp);

            using (DataClasses1DataContext dataContext = new DataClasses1DataContext())
            {
                tblPolicy policyRow = new tblPolicy()
                {
                    ID = 1,
                    PolicyHolder = "fai",
                    DOB = DateTime.Now,
                    Address = "london",
                    Postcode = "EC2M 7QH",
                    Mobile = "11111",
                    Premium = 50,
                    Tax = 0                    
                    //"id": 1,
                    //"policyholder": 'fai',
                    //"dob": '1991-01-01',
                    //"address": 'london',
                    //"postcode": 'ec2m 7qh',
                    //"mobile": 11111,
                    //"premium": 50,
                    //"taxvalue": 0
                };

                dataContext.tblPolicies.InsertOnSubmit(policyRow);
                dataContext.SubmitChanges();
                
            }

            //var person = Json.Decode(resp);


        }

        public object DeserializeJson<T>(string Json)
        {
            JavaScriptSerializer JavaScriptSerializer = new JavaScriptSerializer();
            return JavaScriptSerializer.Deserialize<T>(Json);
        }
    }

}
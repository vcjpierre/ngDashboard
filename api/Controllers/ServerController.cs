using api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace api.Controllers
{
  [Route("api/[controller]")]
  public class ServerController : Controller
  {
    private readonly ApiContext _ctx;

    public ServerController(ApiContext ctx)
    {
      _ctx = ctx;
    }

    [HttpGet]
    public IActionResult Get()
    {
      var response = _ctx.Servers.OrderBy(s => s.Id).ToList();
      return Ok(response);
    }

    [HttpGet("{id}", Name = "GetServer")]
    public IActionResult Get(int id)
    {
      var response = _ctx.Servers.Find(id);
      return Ok(response);
    }

    [HttpPut("{id}")]
    public IActionResult Message(int id, [FromBody] ServerMessage msg)
    {

      var server = _ctx.Servers.FirstOrDefault(s => s.Id == id);

      if (server == null)
      {
        return NotFound();
      }

      // move update handling to a service, perhaps
      if (msg.Payload == "activate")
      {
        server.IsOnline = true;
        _ctx.SaveChanges();
      }

      if (msg.Payload == "deactivate")
      {
        server.IsOnline = false;
        _ctx.SaveChanges();
      }

      return new NoContentResult();
    }
  }
}
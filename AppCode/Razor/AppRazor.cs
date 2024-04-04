using AppCode.Data;
using ToSic.Razor.Blade;
using ToSic.Sxc.Data;

namespace AppCode.Razor
{
  public abstract partial class AppRazor<TModel>: Custom.Hybrid.RazorTyped<TModel>
  {
    /// <summary>
    /// App Resources (typed)
    /// </summary>
    protected AppResources AppRes => _appResources ??= App.Resources;
    private AppResources _appResources;

    /// <summary>
    /// App Settings (typed)
    /// </summary>
    protected AppSettings AppSet => _appSettings ??= App.Settings;
    private AppSettings _appSettings;

  }
}

using FluentValidation;

namespace Application.Validators
{
  public static class ValidatorExtensions
  {
    public static IRuleBuilder<T, string> Password<T>(this IRuleBuilder<T, string> ruleBuilder)
    {
      var options = ruleBuilder.NotEmpty().MinimumLength(6).WithMessage("Пароль должен быть не менее 6 знаков длинной").Matches("[A-Z]").WithMessage("Пароль должен содержать одну заглавную букву").Matches("[a-z]").WithMessage("Пароль должен содержать хотя бы одну прописную букву").Matches("[0-9]").WithMessage("Пароль должен содержать одну цифру").Matches("[^a-zA-Z0-9]").WithMessage("Пароль должен содержать символ");
      return options;
    }
  }
}
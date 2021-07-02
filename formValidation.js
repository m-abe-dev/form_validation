import * as Yup from "yup";

/**
 * カスタムバリデーション
 * ひらがな入力
 */
Yup.addMethod(Yup.string, "hiragana", function () {
  return this.test("hiragana", "ひらがなで入力して下さい", (value) => {
    if (value == null || value === "") return true;
    return value.match(/^[ぁ-ん]+$/);
  });
});
/**
 * カスタムバリデーション
 * カタカナ入力
 */
Yup.addMethod(Yup.string, "katakana", function () {
  return this.test("katakana", "カタカナで入力して下さい", (value) => {
    if (value == null || value === "") return true;
    return value.match(/^[ァ-ヶー]+$/);
  });
});

/**
 * ログイン用
 */
export const LOGIN_FORM_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .email("正しいメールアドレスを入力してください")
    .required("メールアドレスを入力してください"),
  password: Yup.string().required("パスワードを入力してください"),
  keepLogIn: Yup.boolean(),
});
/**
 * パスワード再発行用
 */
export const FORGOT_PASSWORD_FORM_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .email("正しいメールアドレスを入力してください")
    .required("メールアドレスを入力してください"),
});
/**
 * パスワード再設定用
 */
export const RESET_PASSWORD_FORM_VALIDATION = Yup.object().shape({
  password: Yup.string().required("パスワードを入力してください"),
  passwordConfirmation: Yup.string()
    .required("パスワードを再入力してください")
    .oneOf([Yup.ref("password"), null], "パスワードが一致しません"),
});
/**
 * 認証コード用
 */
export const AUTH_CODE_FORM_VALIDATION = Yup.object().shape({
  code: Yup.string()
    .matches(/^([0-9]{6})$/, {
      message: "６桁の認証コードを入力してください",
    })
    .required("６桁の認証コードを入力してください"),
});
/**
 * アカウントタイプ選択用
 */
export const ACCOUNT_TYPE_FORM_VALIDATION = Yup.object().shape({
  account: Yup.string().required("アカウントタイプを選択してください"),
});
/**
 * 新規個人アカウント登録用
 */
export const GENERAL＿REGISTER_FORM_VALIDATION = Yup.object().shape({
  accountName: Yup.string().required("アカウント名を入力してください"),
  lastName: Yup.string().required("氏を入力してください"),
  firstName: Yup.string().required("名を入力してください"),
  lastNameFurigana: Yup.string()
    .hiragana()
    .required("氏（ふりがな）を入力してください"),
  firstNameFurigana: Yup.string()
    .hiragana()
    .required("名（ふりがな）を入力してください"),
  email: Yup.string()
    .email("正しいメールアドレスを入力してください")
    .required("メールアドレスを入力してください"),
  emailConfirmation: Yup.string()
    .email("正しいメールアドレスを入力してください")
    .required("確認用メールアドレスを入力してください")
    .oneOf([Yup.ref("email")], "メールアドレスが一致しません"),
  tel: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "電話番号の形式に誤りがあります"
    )
    .required("電話番号を入力してください"),
  password: Yup.string().required("パスワードを入力してください"),
  passwordConfirmation: Yup.string()
    .required("パスワードを再入力してください")
    .oneOf([Yup.ref("password"), null], "パスワードが一致しません"),
});
/**
 * 新規組織アカウント申請用
 */
export const OFFICIAL＿REGISTER_FORM_VALIDATION = Yup.object().shape({
  accountName: Yup.string().required("アカウント名を入力してください"),
  companyName: Yup.string().required("会社名を入力してください"),
  companyNameFurigana: Yup.string()
    .hiragana()
    .required("会社名（ふりがな）を入力してください"),
  tel: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "電話番号の形式に誤りがあります"
    )
    .required("電話番号を入力してください"),
});
/**
 * 新規ユーザー申請用
 */
export const USER＿REGISTER_FORM_VALIDATION = Yup.object().shape({
  accountName: Yup.string().required("アカウント名を入力してください"),
  lastName: Yup.string().required("氏を入力してください"),
  firstName: Yup.string().required("名を入力してください"),
  lastNameFurigana: Yup.string()
    .hiragana()
    .required("氏（ふりがな）を入力してください"),
  firstNameFurigana: Yup.string()
    .hiragana()
    .required("名（ふりがな）を入力してください"),
  email: Yup.string()
    .email("正しいメールアドレスを入力してください")
    .required("メールアドレスを入力してください"),
  emailConfirmation: Yup.string()
    .email("正しいメールアドレスを入力してください")
    .required("確認用メールアドレスを入力してください")
    .oneOf([Yup.ref("email")], "メールアドレスが一致しません"),
  tel: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "電話番号の形式に誤りがあります"
    )
    .required("電話番号を入力してください"),
  password: Yup.string().required("パスワードを入力してください"),
  passwordConfirmation: Yup.string()
    .required("パスワードを再入力してください")
    .oneOf([Yup.ref("password"), null], "パスワードが一致しません"),
});
/**
 * 振り込み口座申請用
 */
export const BANK＿REGISTER_FORM_VALIDATION = Yup.object().shape({
  bankName: Yup.string().required("銀行名を入力してください"),
  branchName: Yup.string().required("支店名を入力してください"),
  accountType: Yup.string().required("口座種別を選んでください"),
  accountNumber: Yup.string()
    .matches(/^[0-9]+$/, "半角数字で入力してください")
    .max(7, "７桁以下の数字を入力してください")
    .required("口座番号を入力してください"),
  accountHolder: Yup.string()
    .katakana()
    .required("口座名義人を入力してください"),
});
/**
 * 利用規約同意用
 */
export const ACCEPT_TERMS_FORM_VALIDATION = Yup.object().shape({
  accept: Yup.boolean()
    .required()
    .oneOf([true], "同意の上、次へお進みください"),
});

// 抽選、定価販売
export const QUANTITY_VALIDATION = Yup.lazy((values) => {
  switch (values.payment) {
    // 新規カード選択した場合
    case "newCredit":
      return Yup.object().shape({
        price: Yup.string()
          .matches(/^((([1-9]\d*)(,\d{3})*)|0)$/, "半角数字で入力してください")
          .required("入札価格を入力してください")
          .nullable()
          .transform((value, originalValue) =>
            String(originalValue).trim() === "" ? null : value
          ),
        quantity: Yup.string()
          .matches(/^[0-9]+$/, "半角数字で入力してください")
          .required("購入個数を入力してください"),
        serialNumber:
          Yup.string().required("シリアルナンバーを指定してください"),
        paymentMethod: Yup.string().required("お支払い方法を選択してください"),
        payment: Yup.string().required("お支払い方法を選んでください"),
        creditcard: Yup.object().shape({
          cardHolder: Yup.string().required("カード名義人を入力してください"),
          cardNumber: Yup.string()
            .min(16, "正しいクレジットカード番号を入力してください")
            .required("カード番号を入力してください"),
          cardMonth: Yup.string()
            .matches(/^([0-9]{2})$/, "半角数字で入力してください")
            .required("有効期限を入力してください"),
          cardYear: Yup.string()
            .matches(/^([0-9]{4})$/, "半角数字で入力してください")
            .required("有効期限を入力してください"),
          cvc: Yup.string()
            .matches(/^([0-9]{3,4})$/, "半角数字で入力してください")
            .required("セキュリティコードを入力してください"),
        }),
      });
    case "newWallet":
      return Yup.object().shape({
        quantity: Yup.string()
          .matches(/^[0-9]+$/, "半角数字で入力してください")
          .required("購入個数を入力してください"),
        serialNumber:
          Yup.string().required("シリアルナンバーを指定してください"),
        paymentMethod: Yup.string().required("お支払い方法を選択してください"),
        payment: Yup.string().required("お支払い方法を選んでください"),
        walletAddress:
          Yup.string().required("ウォレットアドレスを入力してください"),
      });
    default:
      return Yup.object().shape({
        quantity: Yup.string()
          .matches(/^[0-9]+$/, "半角数字で入力してください")
          .required("購入個数を入力してください"),
        serialNumber:
          Yup.string().required("シリアルナンバーを指定してください"),
        paymentMethod: Yup.string().required("お支払い方法を選択してください"),
        payment: Yup.string().required("お支払い方法を選んでください"),
      });
  }
});
// 入札
export const BID_VALIDATION = Yup.lazy((values) => {
  switch (values.payment) {
    // 新規カード選択した場合
    case "newCredit":
      return Yup.object().shape({
        price: Yup.string()
          .matches(/^((([1-9]\d*)(,\d{3})*)|0)$/, "半角数字で入力してください")
          .required("入札価格を入力してください")
          .nullable()
          .transform((value, originalValue) =>
            String(originalValue).trim() === "" ? null : value
          ),
        quantity: Yup.string()
          .matches(/^[0-9]+$/, "半角数字で入力してください")
          .required("購入個数を入力してください"),
        serialNumber:
          Yup.string().required("シリアルナンバーを指定してください"),
        paymentMethod: Yup.string().required("お支払い方法を選択してください"),
        payment: Yup.string().required("お支払い方法を選んでください"),
        creditcard: Yup.object().shape({
          cardHolder: Yup.string().required("カード名義人を入力してください"),
          cardNumber: Yup.string()
            .min(16, "正しいクレジットカード番号を入力してください")
            .required("カード番号を入力してください"),
          cardMonth: Yup.string()
            .matches(/^([0-9]{2})$/, "半角数字で入力してください")
            .required("有効期限を入力してください"),
          cardYear: Yup.string()
            .matches(/^([0-9]{4})$/, "半角数字で入力してください")
            .required("有効期限を入力してください"),
          cvc: Yup.string()
            .matches(/^([0-9]{3,4})$/, "半角数字で入力してください")
            .required("セキュリティコードを入力してください"),
        }),
      });
    case "newWallet":
      return Yup.object().shape({
        price: Yup.string()
          .matches(/^((([1-9]\d*)(,\d{3})*)|0)$/, "半角数字で入力してください")
          .required("入札価格を入力してください")
          .nullable()
          .transform((value, originalValue) =>
            String(originalValue).trim() === "" ? null : value
          ),
        quantity: Yup.string()
          .matches(/^[0-9]+$/, "半角数字で入力してください")
          .required("購入個数を入力してください"),
        serialNumber:
          Yup.string().required("シリアルナンバーを指定してください"),
        paymentMethod: Yup.string().required("お支払い方法を選択してください"),
        payment: Yup.string().required("お支払い方法を選んでください"),
        walletAddress:
          Yup.string().required("ウォレットアドレスを入力してください"),
      });
    default:
      return Yup.object().shape({
        price: Yup.string()
          .matches(/^((([1-9]\d*)(,\d{3})*)|0)$/, "半角数字で入力してください")
          .required("入札価格を入力してください")
          .nullable()
          .transform((value, originalValue) =>
            String(originalValue).trim() === "" ? null : value
          ),
        quantity: Yup.string()
          .matches(/^[0-9]+$/, "半角数字で入力してください")
          .required("購入個数を入力してください"),
        serialNumber:
          Yup.string().required("シリアルナンバーを指定してください"),
        paymentMethod: Yup.string().required("お支払い方法を選択してください"),
        payment: Yup.string().required("お支払い方法を選んでください"),
      });
  }
});
// オークション
export const AUCTION_VALIDATION = Yup.lazy((values) => {
  switch (values.payment) {
    // 新規カード選択した場合
    case "newCredit":
      return Yup.object().shape({
        price: Yup.string()
          .matches(/^((([1-9]\d*)(,\d{3})*)|0)$/, "半角数字で入力してください")
          .required("オークション価格を入力してください")
          .nullable()
          .transform((value, originalValue) =>
            String(originalValue).trim() === "" ? null : value
          ),
        quantity: Yup.string()
          .matches(/^[0-9]+$/, "半角数字で入力してください")
          .required("購入個数を入力してください"),
        serialNumber:
          Yup.string().required("シリアルナンバーを指定してください"),
        paymentMethod: Yup.string().required("お支払い方法を選択してください"),
        payment: Yup.string().required("お支払い方法を選んでください"),
        creditcard: Yup.object().shape({
          cardHolder: Yup.string().required("カード名義人を入力してください"),
          cardNumber: Yup.string()
            .min(16, "正しいクレジットカード番号を入力してください")
            .required("カード番号を入力してください"),
          cardMonth: Yup.string()
            .matches(/^([0-9]{2})$/, "半角数字で入力してください")
            .required("有効期限を入力してください"),
          cardYear: Yup.string()
            .matches(/^([0-9]{4})$/, "半角数字で入力してください")
            .required("有効期限を入力してください"),
          cvc: Yup.string()
            .matches(/^([0-9]{3,4})$/, "半角数字で入力してください")
            .required("セキュリティコードを入力してください"),
        }),
      });
    case "newWallet":
      return Yup.object().shape({
        price: Yup.string()
          .matches(/^((([1-9]\d*)(,\d{3})*)|0)$/, "半角数字で入力してください")
          .required("オークション価格を入力してください")
          .nullable()
          .transform((value, originalValue) =>
            String(originalValue).trim() === "" ? null : value
          ),
        quantity: Yup.string()
          .matches(/^[0-9]+$/, "半角数字で入力してください")
          .required("購入個数を入力してください"),
        serialNumber:
          Yup.string().required("シリアルナンバーを指定してください"),
        paymentMethod: Yup.string().required("お支払い方法を選択してください"),
        payment: Yup.string().required("お支払い方法を選んでください"),
        walletAddress:
          Yup.string().required("ウォレットアドレスを入力してください"),
      });
    default:
      return Yup.object().shape({
        price: Yup.string()
          .matches(/^((([1-9]\d*)(,\d{3})*)|0)$/, "半角数字で入力してください")
          .required("入札価格を入力してください")
          .nullable()
          .transform((value, originalValue) =>
            String(originalValue).trim() === "" ? null : value
          ),
        quantity: Yup.string()
          .matches(/^[0-9]+$/, "半角数字で入力してください")
          .required("購入個数を入力してください"),
        serialNumber:
          Yup.string().required("シリアルナンバーを指定してください"),
        paymentMethod: Yup.string().required("お支払い方法を選択してください"),
        payment: Yup.string().required("お支払い方法を選んでください"),
      });
  }
});
/**
 * シリアルナンバー
 */
export const SERIAL_NUMBER_FORM_VALIDATION = Yup.object().shape({
  serialNumbers: Yup.array()
    .min(1, "シリアルナンバーを指定してください")
    // .required("シリアルナンバーを指定してください")
    .nullable(),
});

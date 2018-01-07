# Startup Weekend Token

Startup Weekend Token は Startup Weekend Tokyo Blockchain 参加者向けに発行しているトークンです。
Ropsten テストネットにデプロイされています。

Contract Address: 0xb91ead060fB583Ff53CEdD4ad6B0DE375C7D4bfD

## 設定

Ropsten アカウントと INFURA の登録が必要です。
Ropsten アカウントが持つニーモニックと INFURA のアクセストークンを環境変数として設定してください。

```
export ROPSTEN_MNEMONIC="<Ropsten アカウントのニーモニック>"
export INFURA_ACCESS_TOKEN="<INFURAのアクセストークン>"
```

## 残高の確認

Ropsten テストネットのコンソールを起動します。

```
% truffle console --network ropsten
```

下記のようにして残高の確認ができます。

```
truffle(ropsten)> contract = StartupWeekendToken.at('0xb91ead060fB583Ff53CEdD4ad6B0DE375C7D4bfD')
truffle(ropsten)> contract.balanceOf('<Ropsten アカウントのアドレス>')
BigNumber { s: 1, e: 4, c: [ 12000 ] }
```

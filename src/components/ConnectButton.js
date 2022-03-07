import { Button } from "@mui/material";
import { useEthers, useEtherBalance } from "@usedapp/core";
export default function Logo() {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  return (
    <>
      {account ? (
        <Button variant="outlined" onClick={deactivate}>
          {`${account.slice(0, 6)}...${account.slice(-6)}`}
        </Button>
      ) : (
        <Button variant="outlined" onClick={activateBrowserWallet}>
          Connect Wallet
        </Button>
      )}
    </>
  );
}

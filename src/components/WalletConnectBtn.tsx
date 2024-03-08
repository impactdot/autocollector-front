"use client";
import { useEffect } from "react";
import { LargeButton, WalletConnectIcon } from "../ui-kit";
import { useAccount, useNetwork, useSignMessage } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";

type Props = {
  onLoginClick: () => void;
};

export const WalletConnectBtn = ({ onLoginClick }: Props) => {
  const { signMessageAsync } = useSignMessage();
  const { chain } = useNetwork();
  const { address, isConnected } = useAccount();
  const { openConnectModal, connectModalOpen: open } = useConnectModal();

  const handleLogin = async () => {
    onLoginClick();
  };

  useEffect(() => {
    if (isConnected && open) {
      handleLogin();
    }
  }, [isConnected, open]);

  return (
    <LargeButton
      icon={<WalletConnectIcon />}
      onClick={() => {
        if (!isConnected) {
          openConnectModal ? openConnectModal() : null;
        } else {
          handleLogin();
        }
      }}
    >
      WalletConnect
    </LargeButton>
  );
};

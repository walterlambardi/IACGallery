import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Tts, { TtsEvent } from 'react-native-tts';

type SpeakStatus = 'start' | 'progress' | 'finish' | 'cancel';

const useTextToSpeech = () => {
  const [speakStatus, setSpeakStatus] = useState<SpeakStatus>('cancel');
  const navigation = useNavigation();

  useEffect(() => {
    const setTtsDefaults = async () => {
      await Tts.setDefaultLanguage('en-IE');
      await Tts.setDefaultRate(0.5);
      await Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
    };
    setTtsDefaults();

    const handleTtsStart = (event: TtsEvent) => {
      console.log('start', event);
      setSpeakStatus('start');
    };
    const handleTtsProgress = (event: TtsEvent) => {
      console.log('progress', event);
      setSpeakStatus('progress');
    };
    const handleTtsFinish = (event: TtsEvent) => {
      console.log('finish', event);
      setSpeakStatus('finish');
    };
    const handleTtsCancel = (event: TtsEvent) => {
      console.log('cancel', event);
      setSpeakStatus('cancel');
    };

    Tts.addEventListener('tts-start', handleTtsStart);
    Tts.addEventListener('tts-progress', handleTtsProgress);
    Tts.addEventListener('tts-finish', handleTtsFinish);
    Tts.addEventListener('tts-cancel', handleTtsCancel);

    const unsubscribe = navigation.addListener('beforeRemove', () => {
      Tts.stop();
    });

    return () => {
      Tts.removeEventListener('tts-start', handleTtsStart);
      Tts.removeEventListener('tts-progress', handleTtsProgress);
      Tts.removeEventListener('tts-finish', handleTtsFinish);
      Tts.removeEventListener('tts-cancel', handleTtsCancel);
      unsubscribe();
    };
  }, [navigation]);

  const speak = (text: string) => {
    if (speakStatus === 'progress') {
      return Tts.stop();
    }
    return Tts.speak(text);
  };

  return { speak };
};

export default useTextToSpeech;

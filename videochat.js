const startButton = document.getElementById('startButton');
const startButton2 = document.getElementById('startButton2');
const hangupButton = document.getElementById('hangupButton');
const hangupButton2 = document.getElementById('hangupButton2');
const localVideo = document.getElementById('localVideo');
const localVideo2 = document.getElementById('localVideo2');
const remoteVideo = document.getElementById('remoteVideo');
const remoteVideo2 = document.getElementById('remoteVideo2');
let localStream, remoteStream;
let peerConnection;

startButton.addEventListener('click', startVideoChat);
hangupButton.addEventListener('click', hangUp);
startButton2.addEventListener('click', startVideoChat2);
hangupButton2.addEventListener('click', hangUp2);

async function startVideoChat() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;
        peerConnection.addEventListener('track', event => {
            remoteStream = new MediaStream();
            remoteStream.addTrack(event.track, remoteStream);
            remoteVideo.srcObject = remoteStream;
        });

    } catch (error) {
        console.error('Error starting video chat:', error);
    }
}



function hangUp() {
    if (peerConnection) {
        peerConnection.close();
        peerConnection = null;
    }
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        localStream = null;
        localVideo.srcObject = null;
    }
    if (remoteStream) {
        remoteStream.getTracks().forEach(track => track.stop());
        remoteStream = null;
        remoteVideo.srcObject = null;
    }
}

async function startVideoChat2() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo2.srcObject = localStream;
        peerConnection.addEventListener('track', event => {
            remoteStream = new MediaStream();
            remoteStream.addTrack(event.track, remoteStream);
            remoteVideo2.srcObject = remoteStream;
        });

    } catch (error) {
        console.error('Error starting video chat:', error);
    }
}

function hangUp2() {
    if (peerConnection) {
        peerConnection.close();
        peerConnection = null;
    }
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        localStream = null;
        localVideo2.srcObject = null;
    }
    if (remoteStream) {
        remoteStream.getTracks().forEach(track => track.stop());
        remoteStream = null;
        remoteVideo2.srcObject = null;
    }
}

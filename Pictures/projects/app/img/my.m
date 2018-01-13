clear all , close all , clc
disp('loading ful image...')
A = imread('nature.jpg');  
subplot(3,3,1);
imshow(A)
Abw = rgb2gray(A);
[nx,ny] = size(Abw);
subplot(3,3,2);
imshow(Abw);

tic;
n = fft2(Abw)
%l = log(abs(fftshift(n))+1);
%l = mat2gray(l);
%figure(2)
%imshow(l,[]);

disp('zeroing out small fourier coefficients...')
tic;
count_pic = 2;
for thres = 0.1*[0.001 0.005 0.01] * max(max(abs(n)));
  ind = abs(n)>thres;
  count = nx*ny-sum(sum(ind));
  Atlow = n.*ind;
  percent = 100 - count/[nx*ny]*100;
  Alow = uint8(ifft2(Atlow));
   figure(3),subplot(2,2,count_pic),imshow(Alow); count_pic = count_pic + 1;
   drawnow
   title([num2str(percent) ' % of FFT basis'],'FontSize',18);
 end
  
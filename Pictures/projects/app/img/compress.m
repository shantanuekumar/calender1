clear all , close all , clc
disp('loading ful image...')
A = imread('nature.jpg');  
subplot(3,3,1);
imshow(A)
Abw = rgb2gray(A);
subplot(3,3,2);
imshow(Abw);
title('original image','FontSize',18);
gsp = imnoise(Abw,'poisson');
subplot(3,3,3);
imshow(gsp);
%gn = imnoise(2^15 * ones(200,'uint16'),'poisson');
%subplot(3,3,4);
%imshow(gn);
gp = imnoise(Abw,'speckle',0.003);
subplot(3,3,5);
imshow(gp);
gg = imnoise(Abw,'gaussian',0.1,0.001);
subplot(3,3,6);
imshow(gg);
disp('displaying sparsity....');
tic;
n = fft2(Abw)
l = log(abs(fftshift(n))+1);
l = mat2gray(l);
figure(3)
imshow(l,[]);
toc;

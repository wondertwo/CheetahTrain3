package com.cheetah.honordream.ui;

import android.app.Activity;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AlertDialog;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.cheetah.honordream.R;
import com.cheetah.honordream.constant.WebURLS;

/**
 *
 * Created by wondertwo on 2017/7/30.
 */

public class ExchangeActivity extends Activity {

    private WebView mExchangeWebView;
    private AlertDialog.Builder mBuilder;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_exchange);

        mBuilder = new AlertDialog.Builder(ExchangeActivity.this);

        mExchangeWebView = (WebView) findViewById(R.id.activity_exchange_web_view);
        initializeWebView(mExchangeWebView, WebURLS.EXCHANGE_URL);
    }

    private void initializeWebView(WebView mWebView, String URL) {
        WebSettings settings = mWebView.getSettings();

        //启用支持javascript
        settings.setJavaScriptEnabled(true);
        //不使用缓存
        settings.setCacheMode(WebSettings.LOAD_NO_CACHE);
        //访问文件
        settings.setAllowFileAccess(true);
        //支持缩放
        settings.setBuiltInZoomControls(false);
        //自适应屏幕
        settings.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.SINGLE_COLUMN);
        settings.setLoadWithOverviewMode(true);

        //设置WebViewClient
        mWebView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                //回退到主页
                if (url.equals(WebURLS.HOME_PAGE_URL)) {
                    Intent intent = new Intent(ExchangeActivity.this, ContainerActivity.class);
                    startActivity(intent);
                }

                //交易完成页面，先弹窗提示交易完成，调到主页面
                if (url.equals(WebURLS.COMPLETE_URL)) {
                    completeDialog();
                    return true; //表示消耗事
                }

                view.loadUrl(url);
                return true; //在WebView中打开新链接
            }
        });

        //设置WebChromeClient
        mWebView.setWebChromeClient(new WebChromeClient());

        //加载网页
        mWebView.loadUrl(URL);
    }

    private void completeDialog() {
        final AlertDialog mDialog = mBuilder.create(); //对象
        mBuilder.setCancelable(true); //设置对话框是可取消的
        mBuilder.setIcon(R.drawable.img_dialog_icon_ensure);
        mBuilder.setTitle(R.string.exchange_complete_title);
        mBuilder.setMessage(R.string.exchange_complete_msg);

        mBuilder.setPositiveButton(R.string.dialog_positive_btn_msg,
                new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        startActivity(new Intent(ExchangeActivity.this, ContainerActivity.class));
                        mDialog.dismiss();
                        finish();
                    }
                });
        mBuilder.setNegativeButton(R.string.dialog_navigation_btn_msg,
                new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        mDialog.dismiss();
                    }
                });

        mDialog.show(); //显示弹窗
    }

}




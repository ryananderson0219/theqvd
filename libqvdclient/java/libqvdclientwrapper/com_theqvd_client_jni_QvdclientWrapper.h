/* DO NOT EDIT THIS FILE - it is machine generated */
#include <jni.h>
/* Header for class com_theqvd_client_jni_QvdclientWrapper */

#ifndef _Included_com_theqvd_client_jni_QvdclientWrapper
#define _Included_com_theqvd_client_jni_QvdclientWrapper
#ifdef __cplusplus
extern "C" {
#endif
/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_get_version_text
 * Signature: ()Ljava/lang/String;
 */
JNIEXPORT jstring JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1get_1version_1text
  (JNIEnv *, jclass);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_get_version
 * Signature: ()I
 */
JNIEXPORT jint JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1get_1version
  (JNIEnv *, jclass);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_init
 * Signature: (Lcom/theqvd/client/jni/Qvdclient;)J
 */
JNIEXPORT jlong JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1init
  (JNIEnv *, jobject, jobject);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_free
 * Signature: (J)V
 */
JNIEXPORT void JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1free
  (JNIEnv *, jobject, jlong);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_connect_to_vm
 * Signature: (JI)I
 */
JNIEXPORT jint JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1connect_1to_1vm
  (JNIEnv *, jobject, jlong, jint);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_list_of_vm
 * Signature: (J)[Lcom/theqvd/client/jni/Vm;
 */
JNIEXPORT jobjectArray JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1list_1of_1vm
  (JNIEnv *, jobject, jlong);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_stop_vm
 * Signature: (JI)I
 */
JNIEXPORT jint JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1stop_1vm
  (JNIEnv *, jobject, jlong, jint);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_set_geometry
 * Signature: (JII)V
 */
JNIEXPORT void JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1set_1geometry
  (JNIEnv *, jobject, jlong, jint, jint);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_set_fullscreen
 * Signature: (J)V
 */
JNIEXPORT void JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1set_1fullscreen
  (JNIEnv *, jobject, jlong);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_set_nofullscreen
 * Signature: (J)V
 */
JNIEXPORT void JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1set_1nofullscreen
  (JNIEnv *, jobject, jlong);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_set_debug
 * Signature: ()V
 */
JNIEXPORT void JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1set_1debug
  (JNIEnv *, jobject);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_set_display
 * Signature: (JLjava/lang/String;)V
 */
JNIEXPORT void JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1set_1display
  (JNIEnv *, jobject, jlong, jstring);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_set_home
 * Signature: (JLjava/lang/String;)V
 */
JNIEXPORT void JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1set_1home
  (JNIEnv *, jobject, jlong, jstring);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_set_useragent
 * Signature: (JLjava/lang/String;)V
 */
JNIEXPORT void JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1set_1useragent
  (JNIEnv *, jobject, jlong, jstring);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_set_os
 * Signature: (JLjava/lang/String;)V
 */
JNIEXPORT void JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1set_1os
  (JNIEnv *, jobject, jlong, jstring);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_set_link
 * Signature: (JLjava/lang/String;)V
 */
JNIEXPORT void JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1set_1link
  (JNIEnv *, jobject, jlong, jstring);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_set_no_cert_check
 * Signature: (J)V
 */
JNIEXPORT void JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1set_1no_1cert_1check
  (JNIEnv *, jobject, jlong);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_set_strict_cert_check
 * Signature: (J)V
 */
JNIEXPORT void JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1set_1strict_1cert_1check
  (JNIEnv *, jobject, jlong);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_set_progress_callback
 * Signature: (J)V
 */
JNIEXPORT void JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1set_1progress_1callback
  (JNIEnv *, jobject, jlong);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_set_no_progress_callback
 * Signature: (J)V
 */
JNIEXPORT void JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1set_1no_1progress_1callback
  (JNIEnv *, jobject, jlong);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_get_last_error_message
 * Signature: (J)Ljava/lang/String;
 */
JNIEXPORT jstring JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1get_1last_1error_1message
  (JNIEnv *, jobject, jlong);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_set_nx_options
 * Signature: (JLjava/lang/String;)V
 */
JNIEXPORT void JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1set_1nx_1options
  (JNIEnv *, jobject, jlong, jstring);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_set_cert_files
 * Signature: (JLjava/lang/String;Ljava/lang/String;)V
 */
JNIEXPORT void JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1set_1cert_1files
  (JNIEnv *, jobject, jlong, jstring, jstring);

/*
 * Class:     com_theqvd_client_jni_QvdclientWrapper
 * Method:    qvd_c_end_connection
 * Signature: (J)V
 */
JNIEXPORT void JNICALL Java_com_theqvd_client_jni_QvdclientWrapper_qvd_1c_1end_1connection
  (JNIEnv *, jobject, jlong);

#ifdef __cplusplus
}
#endif
#endif

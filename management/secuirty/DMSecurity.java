package com.data.management.secuirty;

import org.apache.hc.core5.http.io.support.HttpServerFilterChainElement;
import org.apache.hc.core5.http.io.support.HttpServerFilterChainRequestHandler;

public class DMSecurity extends HttpServerFilterChainRequestHandler {

	public DMSecurity(HttpServerFilterChainElement filterChain) {
		super(filterChain);
	}

}

/**
 * @typedef {Object} PaymentRequestBody
 * @property {string} authToken
 * @property {Address} billingAddress
 * @property {InternalCart} cart
 * @property {InternalCustomer} customer
 * @property {Order} order
 * @property {Object} orderMeta
 * @property {string} orderMeta.deviceFingerprint
 * @property {Payment} payment
 * @property {PaymentMethod} paymentMethod
 * @property {Object} quoteMeta
 * @property {string} quoteMeta.deviceSessionId
 * @property {string} quoteMeta.geoCountryCode
 * @property {string} quoteMeta.sessionHash
 * @property {Address} shippingAddress
 * @property {InternalShippingOption} shippingOption
 * @property {string} source
 * @property {Object} store
 * @property {string} store.storeHash
 * @property {string} store.storeId
 * @property {string} store.storeLanguage
 * @property {string} store.storeName
 */
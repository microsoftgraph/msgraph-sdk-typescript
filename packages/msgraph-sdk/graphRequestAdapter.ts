import {
  type AuthenticationProvider,
  type ParseNodeFactory,
  ParseNodeFactoryRegistry,
  type SerializationWriterFactory,
  SerializationWriterFactoryRegistry,
} from "@microsoft/kiota-abstractions";
import {
  type HttpClient,
  type ObservabilityOptions,
  ObservabilityOptionsImpl,
} from "@microsoft/kiota-http-fetchlibrary";
import { BaseGraphRequestAdapter } from "@microsoft/msgraph-sdk-core";

import { version } from "./version.js";

export class GraphRequestAdapter extends BaseGraphRequestAdapter {
  /**
   * Instantiates a new request adapter.
   * @param authenticationProvider the authentication provider to use.
   * @param parseNodeFactory the parse node factory to deserialize responses.
   * @param serializationWriterFactory the serialization writer factory to use to serialize request bodies.
   * @param httpClient the http client to use to execute requests.
   * @param observabilityOptions the observability options to use.
   */
  constructor(
    authenticationProvider: AuthenticationProvider,
    parseNodeFactory: ParseNodeFactory = new ParseNodeFactoryRegistry(),
    serializationWriterFactory: SerializationWriterFactory = new SerializationWriterFactoryRegistry(),
    httpClient?: HttpClient,
    observabilityOptions: ObservabilityOptions = new ObservabilityOptionsImpl(),
  ) {
    super(
      "",
      version,
      authenticationProvider,
      parseNodeFactory,
      serializationWriterFactory,
      httpClient,
      observabilityOptions,
    );
  }
}


export interface ConditionalAccessPlatforms{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue, linux. */
    excludePlatforms?:string[] | undefined;
    /** Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue,linux``. */
    includePlatforms?:string[] | undefined;
}

import {ConditionalAccessDevicePlatform} from './conditionalAccessDevicePlatform';
import {ConditionalAccessPlatforms} from './conditionalAccessPlatforms';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessPlatformsImpl implements AdditionalDataHolder, ConditionalAccessPlatforms, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue, linux. */
    excludePlatforms?: ConditionalAccessDevicePlatform[] | undefined;
    /** Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue,linux``. */
    includePlatforms?: ConditionalAccessDevicePlatform[] | undefined;
    /**
     * Instantiates a new conditionalAccessPlatforms and sets the default values.
     * @param conditionalAccessPlatformsParameterValue 
     */
    public constructor(conditionalAccessPlatformsParameterValue?: ConditionalAccessPlatforms | undefined) {
        this.additionalData = {};
        this.additionalData = conditionalAccessPlatformsParameterValue?.additionalData ? {} : conditionalAccessPlatformsParameterValue?.additionalData!
        this.excludePlatforms = conditionalAccessPlatformsParameterValue?.excludePlatforms ;
        this.includePlatforms = conditionalAccessPlatformsParameterValue?.includePlatforms ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludePlatforms": n => { this.excludePlatforms = n.getEnumValues<ConditionalAccessDevicePlatform>(ConditionalAccessDevicePlatform); },
            "includePlatforms": n => { this.includePlatforms = n.getEnumValues<ConditionalAccessDevicePlatform>(ConditionalAccessDevicePlatform); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.excludePlatforms){
        if(this.excludePlatforms)
        this.excludePlatforms && writer.writeEnumValue<ConditionalAccessDevicePlatform>("excludePlatforms", ...this.excludePlatforms);
        }
        if(this.includePlatforms){
        if(this.includePlatforms)
        this.includePlatforms && writer.writeEnumValue<ConditionalAccessDevicePlatform>("includePlatforms", ...this.includePlatforms);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}

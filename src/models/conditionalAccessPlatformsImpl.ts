import {ConditionalAccessPlatforms} from './conditionalAccessPlatforms';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessPlatformsImpl implements AdditionalDataHolder, ConditionalAccessPlatforms, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue, linux. */
    public excludePlatforms?: string[] | undefined;
    /** Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue,linux``. */
    public includePlatforms?: string[] | undefined;
    /**
     * Instantiates a new conditionalAccessPlatforms and sets the default values.
     * @param conditionalAccessPlatformsParameterValue 
     */
    public constructor(conditionalAccessPlatformsParameterValue?: ConditionalAccessPlatforms | undefined) {
        this.additionalData = conditionalAccessPlatformsParameterValue?.additionalData ? conditionalAccessPlatformsParameterValue?.additionalData! : {}
        this.excludePlatforms = conditionalAccessPlatformsParameterValue?.excludePlatforms ;
        this.includePlatforms = conditionalAccessPlatformsParameterValue?.includePlatforms ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludePlatforms": n => { this.excludePlatforms = n.getCollectionOfPrimitiveValues<string>(); },
            "includePlatforms": n => { this.includePlatforms = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.excludePlatforms){
        writer.writeCollectionOfPrimitiveValues<string>("excludePlatforms", this.excludePlatforms);
        }
        if(this.includePlatforms){
        writer.writeCollectionOfPrimitiveValues<string>("includePlatforms", this.includePlatforms);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}

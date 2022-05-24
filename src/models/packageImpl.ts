import {Package} from './package';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PackageImpl implements AdditionalDataHolder, Package, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A string indicating the type of package. While oneNote is the only currently defined value, you should expect other package types to be returned and handle them accordingly. */
    public type?: string | undefined;
    /**
     * Instantiates a new package and sets the default values.
     * @param packageParameterValue 
     */
    public constructor(packageParameterValue?: Package | undefined) {
        this.additionalData = packageParameterValue?.additionalData ? packageParameterValue?.additionalData! : {}
        this.type = packageParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.type){
        writer.writeStringValue("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}

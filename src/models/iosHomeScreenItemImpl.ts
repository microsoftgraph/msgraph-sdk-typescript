import {IosHomeScreenItem} from './iosHomeScreenItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents an item on the iOS Home Screen */
export class IosHomeScreenItemImpl implements IosHomeScreenItem {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Name of the app */
    public displayName?: string | undefined;
    /**
     * Instantiates a new iosHomeScreenItem and sets the default values.
     * @param iosHomeScreenItemParameterValue 
     */
    public constructor(iosHomeScreenItemParameterValue?: IosHomeScreenItem | undefined) {
        this.additionalData = iosHomeScreenItemParameterValue?.additionalData ? iosHomeScreenItemParameterValue?.additionalData! : {};
        this.displayName = iosHomeScreenItemParameterValue?.displayName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}

import {WindowsInformationProtectionResourceCollection} from './windowsInformationProtectionResourceCollection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Windows Information Protection Resource Collection */
export class WindowsInformationProtectionResourceCollectionImpl implements AdditionalDataHolder, Parsable, WindowsInformationProtectionResourceCollection {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Display name */
    public displayName?: string | undefined;
    /** Collection of resources */
    public resources?: string[] | undefined;
    /**
     * Instantiates a new windowsInformationProtectionResourceCollection and sets the default values.
     * @param windowsInformationProtectionResourceCollectionParameterValue 
     */
    public constructor(windowsInformationProtectionResourceCollectionParameterValue?: WindowsInformationProtectionResourceCollection | undefined) {
        this.additionalData = windowsInformationProtectionResourceCollectionParameterValue?.additionalData ? windowsInformationProtectionResourceCollectionParameterValue?.additionalData! : {}
        this.displayName = windowsInformationProtectionResourceCollectionParameterValue?.displayName ;
        this.resources = windowsInformationProtectionResourceCollectionParameterValue?.resources ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "resources": n => { this.resources = n.getCollectionOfPrimitiveValues<string>(); },
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
        if(this.resources){
        writer.writeCollectionOfPrimitiveValues<string>("resources", this.resources);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}

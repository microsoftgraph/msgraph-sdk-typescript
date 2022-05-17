import {ForceDeleteRequestBody} from './forceDeleteRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the forceDelete method. */
export class ForceDeleteRequestBodyImpl implements AdditionalDataHolder, ForceDeleteRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The disableUserAccounts property */
    disableUserAccounts?: boolean | undefined;
    /**
     * Instantiates a new forceDeleteRequestBody and sets the default values.
     * @param forceDeleteRequestBodyParameterValue 
     */
    public constructor(forceDeleteRequestBodyParameterValue?: ForceDeleteRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = forceDeleteRequestBodyParameterValue?.additionalData ? {} : forceDeleteRequestBodyParameterValue?.additionalData!
        this.disableUserAccounts = forceDeleteRequestBodyParameterValue?.disableUserAccounts ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "disableUserAccounts": n => { this.disableUserAccounts = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.disableUserAccounts){
        if(this.disableUserAccounts)
        writer.writeBooleanValue("disableUserAccounts", this.disableUserAccounts);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}

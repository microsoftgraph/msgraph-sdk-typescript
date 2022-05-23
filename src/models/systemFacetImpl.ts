import {SystemFacet} from './systemFacet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SystemFacetImpl implements AdditionalDataHolder, Parsable, SystemFacet {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new systemFacet and sets the default values.
     * @param systemFacetParameterValue 
     */
    public constructor(systemFacetParameterValue?: SystemFacet | undefined) {
        this.additionalData = systemFacetParameterValue?.additionalData ? systemFacetParameterValue?.additionalData! : {}
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeAdditionalData(this.additionalData);
    };
}

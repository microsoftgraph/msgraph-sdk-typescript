import {ConditionalAccessLocations} from './conditionalAccessLocations';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessLocationsImpl implements AdditionalDataHolder, ConditionalAccessLocations, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Location IDs excluded from scope of policy. */
    public excludeLocations?: string[] | undefined;
    /** Location IDs in scope of policy unless explicitly excluded, All, or AllTrusted. */
    public includeLocations?: string[] | undefined;
    /**
     * Instantiates a new conditionalAccessLocations and sets the default values.
     * @param conditionalAccessLocationsParameterValue 
     */
    public constructor(conditionalAccessLocationsParameterValue?: ConditionalAccessLocations | undefined) {
        this.additionalData = conditionalAccessLocationsParameterValue?.additionalData ? conditionalAccessLocationsParameterValue?.additionalData! : {}
        this.excludeLocations = conditionalAccessLocationsParameterValue?.excludeLocations ;
        this.includeLocations = conditionalAccessLocationsParameterValue?.includeLocations ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludeLocations": n => { this.excludeLocations = n.getCollectionOfPrimitiveValues<string>(); },
            "includeLocations": n => { this.includeLocations = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.excludeLocations){
        writer.writeCollectionOfPrimitiveValues<string>("excludeLocations", this.excludeLocations);
        }
        if(this.includeLocations){
        writer.writeCollectionOfPrimitiveValues<string>("includeLocations", this.includeLocations);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}

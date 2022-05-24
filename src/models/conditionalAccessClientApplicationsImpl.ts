import {ConditionalAccessClientApplications} from './conditionalAccessClientApplications';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessClientApplicationsImpl implements AdditionalDataHolder, ConditionalAccessClientApplications, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Service principal IDs excluded from the policy scope. */
    public excludeServicePrincipals?: string[] | undefined;
    /** Service principal IDs included in the policy scope, or ServicePrincipalsInMyTenant. */
    public includeServicePrincipals?: string[] | undefined;
    /**
     * Instantiates a new conditionalAccessClientApplications and sets the default values.
     * @param conditionalAccessClientApplicationsParameterValue 
     */
    public constructor(conditionalAccessClientApplicationsParameterValue?: ConditionalAccessClientApplications | undefined) {
        this.additionalData = conditionalAccessClientApplicationsParameterValue?.additionalData ? conditionalAccessClientApplicationsParameterValue?.additionalData! : {}
        this.excludeServicePrincipals = conditionalAccessClientApplicationsParameterValue?.excludeServicePrincipals ;
        this.includeServicePrincipals = conditionalAccessClientApplicationsParameterValue?.includeServicePrincipals ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludeServicePrincipals": n => { this.excludeServicePrincipals = n.getCollectionOfPrimitiveValues<string>(); },
            "includeServicePrincipals": n => { this.includeServicePrincipals = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.excludeServicePrincipals){
        writer.writeCollectionOfPrimitiveValues<string>("excludeServicePrincipals", this.excludeServicePrincipals);
        }
        if(this.includeServicePrincipals){
        writer.writeCollectionOfPrimitiveValues<string>("includeServicePrincipals", this.includeServicePrincipals);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}

import {ConditionalAccessApplications} from './conditionalAccessApplications';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessApplicationsImpl implements AdditionalDataHolder, ConditionalAccessApplications, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The list of application IDs explicitly excluded from the policy. */
    public excludeApplications?: string[] | undefined;
    /** The list of application IDs the policy applies to, unless explicitly excluded (in excludeApplications). Can also be set to All. */
    public includeApplications?: string[] | undefined;
    /** Authentication context class references include. Supported values are c1 through c25. */
    public includeAuthenticationContextClassReferences?: string[] | undefined;
    /** User actions to include. Supported values are urn:user:registersecurityinfo and urn:user:registerdevice */
    public includeUserActions?: string[] | undefined;
    /**
     * Instantiates a new conditionalAccessApplications and sets the default values.
     * @param conditionalAccessApplicationsParameterValue 
     */
    public constructor(conditionalAccessApplicationsParameterValue?: ConditionalAccessApplications | undefined) {
        this.additionalData = conditionalAccessApplicationsParameterValue?.additionalData ? conditionalAccessApplicationsParameterValue?.additionalData! : {}
        this.excludeApplications = conditionalAccessApplicationsParameterValue?.excludeApplications ;
        this.includeApplications = conditionalAccessApplicationsParameterValue?.includeApplications ;
        this.includeAuthenticationContextClassReferences = conditionalAccessApplicationsParameterValue?.includeAuthenticationContextClassReferences ;
        this.includeUserActions = conditionalAccessApplicationsParameterValue?.includeUserActions ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludeApplications": n => { this.excludeApplications = n.getCollectionOfPrimitiveValues<string>(); },
            "includeApplications": n => { this.includeApplications = n.getCollectionOfPrimitiveValues<string>(); },
            "includeAuthenticationContextClassReferences": n => { this.includeAuthenticationContextClassReferences = n.getCollectionOfPrimitiveValues<string>(); },
            "includeUserActions": n => { this.includeUserActions = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.excludeApplications){
        writer.writeCollectionOfPrimitiveValues<string>("excludeApplications", this.excludeApplications);
        }
        if(this.includeApplications){
        writer.writeCollectionOfPrimitiveValues<string>("includeApplications", this.includeApplications);
        }
        if(this.includeAuthenticationContextClassReferences){
        writer.writeCollectionOfPrimitiveValues<string>("includeAuthenticationContextClassReferences", this.includeAuthenticationContextClassReferences);
        }
        if(this.includeUserActions){
        writer.writeCollectionOfPrimitiveValues<string>("includeUserActions", this.includeUserActions);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}

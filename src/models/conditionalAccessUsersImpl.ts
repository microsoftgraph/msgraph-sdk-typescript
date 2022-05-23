import {ConditionalAccessUsers} from './conditionalAccessUsers';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessUsersImpl implements AdditionalDataHolder, ConditionalAccessUsers, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Group IDs excluded from scope of policy. */
    public excludeGroups?: string[] | undefined;
    /** Role IDs excluded from scope of policy. */
    public excludeRoles?: string[] | undefined;
    /** User IDs excluded from scope of policy and/or GuestsOrExternalUsers. */
    public excludeUsers?: string[] | undefined;
    /** Group IDs in scope of policy unless explicitly excluded, or All. */
    public includeGroups?: string[] | undefined;
    /** Role IDs in scope of policy unless explicitly excluded, or All. */
    public includeRoles?: string[] | undefined;
    /** User IDs in scope of policy unless explicitly excluded, or None or All or GuestsOrExternalUsers. */
    public includeUsers?: string[] | undefined;
    /**
     * Instantiates a new conditionalAccessUsers and sets the default values.
     * @param conditionalAccessUsersParameterValue 
     */
    public constructor(conditionalAccessUsersParameterValue?: ConditionalAccessUsers | undefined) {
        this.additionalData = conditionalAccessUsersParameterValue?.additionalData ? conditionalAccessUsersParameterValue?.additionalData! : {}
        this.excludeGroups = conditionalAccessUsersParameterValue?.excludeGroups ;
        this.excludeRoles = conditionalAccessUsersParameterValue?.excludeRoles ;
        this.excludeUsers = conditionalAccessUsersParameterValue?.excludeUsers ;
        this.includeGroups = conditionalAccessUsersParameterValue?.includeGroups ;
        this.includeRoles = conditionalAccessUsersParameterValue?.includeRoles ;
        this.includeUsers = conditionalAccessUsersParameterValue?.includeUsers ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludeGroups": n => { this.excludeGroups = n.getCollectionOfPrimitiveValues<string>(); },
            "excludeRoles": n => { this.excludeRoles = n.getCollectionOfPrimitiveValues<string>(); },
            "excludeUsers": n => { this.excludeUsers = n.getCollectionOfPrimitiveValues<string>(); },
            "includeGroups": n => { this.includeGroups = n.getCollectionOfPrimitiveValues<string>(); },
            "includeRoles": n => { this.includeRoles = n.getCollectionOfPrimitiveValues<string>(); },
            "includeUsers": n => { this.includeUsers = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.excludeGroups){
        writer.writeCollectionOfPrimitiveValues<string>("excludeGroups", this.excludeGroups);
        }
        if(this.excludeRoles){
        writer.writeCollectionOfPrimitiveValues<string>("excludeRoles", this.excludeRoles);
        }
        if(this.excludeUsers){
        writer.writeCollectionOfPrimitiveValues<string>("excludeUsers", this.excludeUsers);
        }
        if(this.includeGroups){
        writer.writeCollectionOfPrimitiveValues<string>("includeGroups", this.includeGroups);
        }
        if(this.includeRoles){
        writer.writeCollectionOfPrimitiveValues<string>("includeRoles", this.includeRoles);
        }
        if(this.includeUsers){
        writer.writeCollectionOfPrimitiveValues<string>("includeUsers", this.includeUsers);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}

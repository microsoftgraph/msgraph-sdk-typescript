import {ResourceAction} from './resourceAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Set of allowed and not allowed actions for a resource. */
export class ResourceActionImpl implements AdditionalDataHolder, Parsable, ResourceAction {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Allowed Actions */
    public allowedResourceActions?: string[] | undefined;
    /** Not Allowed Actions. */
    public notAllowedResourceActions?: string[] | undefined;
    /**
     * Instantiates a new resourceAction and sets the default values.
     * @param resourceActionParameterValue 
     */
    public constructor(resourceActionParameterValue?: ResourceAction | undefined) {
        this.additionalData = resourceActionParameterValue?.additionalData ? resourceActionParameterValue?.additionalData! : {}
        this.allowedResourceActions = resourceActionParameterValue?.allowedResourceActions ;
        this.notAllowedResourceActions = resourceActionParameterValue?.notAllowedResourceActions ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowedResourceActions": n => { this.allowedResourceActions = n.getCollectionOfPrimitiveValues<string>(); },
            "notAllowedResourceActions": n => { this.notAllowedResourceActions = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowedResourceActions){
        writer.writeCollectionOfPrimitiveValues<string>("allowedResourceActions", this.allowedResourceActions);
        }
        if(this.notAllowedResourceActions){
        writer.writeCollectionOfPrimitiveValues<string>("notAllowedResourceActions", this.notAllowedResourceActions);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}

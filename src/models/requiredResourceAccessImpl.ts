import {createResourceAccessFromDiscriminatorValue} from './createResourceAccessFromDiscriminatorValue';
import {ResourceAccessImpl} from './index';
import {RequiredResourceAccess} from './requiredResourceAccess';
import {ResourceAccess} from './resourceAccess';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RequiredResourceAccessImpl implements AdditionalDataHolder, Parsable, RequiredResourceAccess {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource. */
    public resourceAccess?: ResourceAccess[] | undefined;
    /** The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application. */
    public resourceAppId?: string | undefined;
    /**
     * Instantiates a new requiredResourceAccess and sets the default values.
     * @param requiredResourceAccessParameterValue 
     */
    public constructor(requiredResourceAccessParameterValue?: RequiredResourceAccess | undefined) {
        this.additionalData = requiredResourceAccessParameterValue?.additionalData ? requiredResourceAccessParameterValue?.additionalData! : {}
        this.resourceAccess = requiredResourceAccessParameterValue?.resourceAccess ;
        this.resourceAppId = requiredResourceAccessParameterValue?.resourceAppId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "resourceAccess": n => { this.resourceAccess = n.getCollectionOfObjectValues<ResourceAccessImpl>(createResourceAccessFromDiscriminatorValue); },
            "resourceAppId": n => { this.resourceAppId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.resourceAccess && this.resourceAccess.length != 0){        const resourceAccessArrValue: ResourceAccessImpl[] = []; this.resourceAccess?.forEach(element => {resourceAccessArrValue.push(new ResourceAccessImpl(element));});
        writer.writeCollectionOfObjectValues<ResourceAccessImpl>("resourceAccess", resourceAccessArrValue);
        }
        if(this.resourceAppId){
        writer.writeStringValue("resourceAppId", this.resourceAppId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}

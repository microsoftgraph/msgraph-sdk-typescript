import {createResourceAccessFromDiscriminatorValue} from './createResourceAccessFromDiscriminatorValue';
import {ResourceAccessImpl} from './index';
import {RequiredResourceAccess} from './requiredResourceAccess';
import {ResourceAccess} from './resourceAccess';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RequiredResourceAccessImpl implements RequiredResourceAccess {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource. */
    private _resourceAccess?: ResourceAccess[] | undefined;
    /** The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application. */
    private _resourceAppId?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new requiredResourceAccess and sets the default values.
     * @param requiredResourceAccessParameterValue 
     */
    public constructor(requiredResourceAccessParameterValue?: RequiredResourceAccess | undefined) {
        this._additionalData = requiredResourceAccessParameterValue?.additionalData ? requiredResourceAccessParameterValue?.additionalData! : {};
        this._resourceAccess = requiredResourceAccessParameterValue?.resourceAccess;
        this._resourceAppId = requiredResourceAccessParameterValue?.resourceAppId;
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
     * Gets the resourceAccess property value. The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource.
     * @returns a ResourceAccessInterface
     */
    public get resourceAccess() {
        return this._resourceAccess;
    };
    /**
     * Sets the resourceAccess property value. The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource.
     * @param value Value to set for the resourceAccess property.
     */
    public set resourceAccess(value: ResourceAccess[] | undefined) {
        if(value) {
            const resourceAccessArrValue: ResourceAccessImpl[] = [];
            this.resourceAccess?.forEach(element => {
                resourceAccessArrValue.push((element instanceof ResourceAccessImpl? element as ResourceAccessImpl:new ResourceAccessImpl(element)));
            });
            this._resourceAccess = resourceAccessArrValue;
        }
    };
    /**
     * Gets the resourceAppId property value. The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application.
     * @returns a string
     */
    public get resourceAppId() {
        return this._resourceAppId;
    };
    /**
     * Sets the resourceAppId property value. The unique identifier for the resource that the application requires access to. This should be equal to the appId declared on the target resource application.
     * @param value Value to set for the resourceAppId property.
     */
    public set resourceAppId(value: string | undefined) {
        if(value) {
            this._resourceAppId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.resourceAccess && this.resourceAccess.length != 0){        const resourceAccessArrValue: ResourceAccessImpl[] = [];
        this.resourceAccess?.forEach(element => {
            resourceAccessArrValue.push((element instanceof ResourceAccessImpl? element as ResourceAccessImpl:new ResourceAccessImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ResourceAccessImpl>("resourceAccess", resourceAccessArrValue);
        }
        if(this.resourceAppId){
            writer.writeStringValue("resourceAppId", this.resourceAppId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}

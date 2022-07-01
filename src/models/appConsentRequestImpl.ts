import {AppConsentRequest} from './appConsentRequest';
import {AppConsentRequestScope} from './appConsentRequestScope';
import {createAppConsentRequestScopeFromDiscriminatorValue} from './createAppConsentRequestScopeFromDiscriminatorValue';
import {createUserConsentRequestFromDiscriminatorValue} from './createUserConsentRequestFromDiscriminatorValue';
import {AppConsentRequestScopeImpl, EntityImpl, UserConsentRequestImpl} from './index';
import {UserConsentRequest} from './userConsentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AppConsentRequestImpl extends EntityImpl implements AppConsentRequest {
    /** The display name of the app for which consent is requested. Required. Supports $filter (eq only) and $orderby. */
    private _appDisplayName?: string | undefined;
    /** The identifier of the application. Required. Supports $filter (eq only) and $orderby. */
    private _appId?: string | undefined;
    /** A list of pending scopes waiting for approval. This is empty if the consentType is Static. Required. */
    private _pendingScopes?: AppConsentRequestScope[] | undefined;
    /** A list of pending user consent requests. */
    private _userConsentRequests?: UserConsentRequest[] | undefined;
    /**
     * Gets the appDisplayName property value. The display name of the app for which consent is requested. Required. Supports $filter (eq only) and $orderby.
     * @returns a string
     */
    public get appDisplayName() {
        return this._appDisplayName;
    };
    /**
     * Sets the appDisplayName property value. The display name of the app for which consent is requested. Required. Supports $filter (eq only) and $orderby.
     * @param value Value to set for the appDisplayName property.
     */
    public set appDisplayName(value: string | undefined) {
        if(value) {
            this._appDisplayName = value;
        }
    };
    /**
     * Gets the appId property value. The identifier of the application. Required. Supports $filter (eq only) and $orderby.
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. The identifier of the application. Required. Supports $filter (eq only) and $orderby.
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        if(value) {
            this._appId = value;
        }
    };
    /**
     * Instantiates a new appConsentRequest and sets the default values.
     * @param appConsentRequestParameterValue 
     */
    public constructor(appConsentRequestParameterValue?: AppConsentRequest | undefined) {
        super(appConsentRequestParameterValue);
        this._appDisplayName = appConsentRequestParameterValue?.appDisplayName;
        this._appId = appConsentRequestParameterValue?.appId;
        this._pendingScopes = appConsentRequestParameterValue?.pendingScopes;
        this._userConsentRequests = appConsentRequestParameterValue?.userConsentRequests;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appDisplayName": n => { this.appDisplayName = n.getStringValue(); },
            "appId": n => { this.appId = n.getStringValue(); },
            "pendingScopes": n => { this.pendingScopes = n.getCollectionOfObjectValues<AppConsentRequestScopeImpl>(createAppConsentRequestScopeFromDiscriminatorValue); },
            "userConsentRequests": n => { this.userConsentRequests = n.getCollectionOfObjectValues<UserConsentRequestImpl>(createUserConsentRequestFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the pendingScopes property value. A list of pending scopes waiting for approval. This is empty if the consentType is Static. Required.
     * @returns a AppConsentRequestScopeInterface
     */
    public get pendingScopes() {
        return this._pendingScopes;
    };
    /**
     * Sets the pendingScopes property value. A list of pending scopes waiting for approval. This is empty if the consentType is Static. Required.
     * @param value Value to set for the pendingScopes property.
     */
    public set pendingScopes(value: AppConsentRequestScope[] | undefined) {
        if(value) {
            const pendingScopesArrValue: AppConsentRequestScopeImpl[] = [];
            this.pendingScopes?.forEach(element => {
                pendingScopesArrValue.push((element instanceof AppConsentRequestScopeImpl? element as AppConsentRequestScopeImpl:new AppConsentRequestScopeImpl(element)));
            });
            this._pendingScopes = pendingScopesArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appDisplayName){
            writer.writeStringValue("appDisplayName", this.appDisplayName);
        }
        if(this.appId){
            writer.writeStringValue("appId", this.appId);
        }
        if(this.pendingScopes && this.pendingScopes.length != 0){        const pendingScopesArrValue: AppConsentRequestScopeImpl[] = [];
        this.pendingScopes?.forEach(element => {
            pendingScopesArrValue.push((element instanceof AppConsentRequestScopeImpl? element as AppConsentRequestScopeImpl:new AppConsentRequestScopeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AppConsentRequestScopeImpl>("pendingScopes", pendingScopesArrValue);
        }
        if(this.userConsentRequests && this.userConsentRequests.length != 0){        const userConsentRequestsArrValue: UserConsentRequestImpl[] = [];
        this.userConsentRequests?.forEach(element => {
            userConsentRequestsArrValue.push((element instanceof UserConsentRequestImpl? element as UserConsentRequestImpl:new UserConsentRequestImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UserConsentRequestImpl>("userConsentRequests", userConsentRequestsArrValue);
        }
    };
    /**
     * Gets the userConsentRequests property value. A list of pending user consent requests.
     * @returns a UserConsentRequestInterface
     */
    public get userConsentRequests() {
        return this._userConsentRequests;
    };
    /**
     * Sets the userConsentRequests property value. A list of pending user consent requests.
     * @param value Value to set for the userConsentRequests property.
     */
    public set userConsentRequests(value: UserConsentRequest[] | undefined) {
        if(value) {
            const userConsentRequestsArrValue: UserConsentRequestImpl[] = [];
            this.userConsentRequests?.forEach(element => {
                userConsentRequestsArrValue.push((element instanceof UserConsentRequestImpl? element as UserConsentRequestImpl:new UserConsentRequestImpl(element)));
            });
            this._userConsentRequests = userConsentRequestsArrValue;
        }
    };
}

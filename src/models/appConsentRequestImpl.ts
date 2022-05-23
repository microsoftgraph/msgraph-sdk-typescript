import {AppConsentRequest} from './appConsentRequest';
import {AppConsentRequestScope} from './appConsentRequestScope';
import {createAppConsentRequestScopeFromDiscriminatorValue} from './createAppConsentRequestScopeFromDiscriminatorValue';
import {createUserConsentRequestFromDiscriminatorValue} from './createUserConsentRequestFromDiscriminatorValue';
import {AppConsentRequestScopeImpl, EntityImpl, UserConsentRequestImpl} from './index';
import {UserConsentRequest} from './userConsentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AppConsentRequestImpl extends EntityImpl implements AppConsentRequest, Parsable {
    /** The display name of the app for which consent is requested. Required. Supports $filter (eq only) and $orderby. */
    public appDisplayName?: string | undefined;
    /** The identifier of the application. Required. Supports $filter (eq only) and $orderby. */
    public appId?: string | undefined;
    /** A list of pending scopes waiting for approval. This is empty if the consentType is Static. Required. */
    public pendingScopes?: AppConsentRequestScope[] | undefined;
    /** A list of pending user consent requests. */
    public userConsentRequests?: UserConsentRequest[] | undefined;
    /**
     * Instantiates a new appConsentRequest and sets the default values.
     * @param appConsentRequestParameterValue 
     */
    public constructor(appConsentRequestParameterValue?: AppConsentRequest | undefined) {
        super();
        this.appDisplayName = appConsentRequestParameterValue?.appDisplayName ;
        this.appId = appConsentRequestParameterValue?.appId ;
        this.pendingScopes = appConsentRequestParameterValue?.pendingScopes ;
        this.userConsentRequests = appConsentRequestParameterValue?.userConsentRequests ;
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
        if(this.pendingScopes && this.pendingScopes.length != 0){        const pendingScopesArrValue: AppConsentRequestScopeImpl[] = []; this.pendingScopes?.forEach(element => {pendingScopesArrValue.push(new AppConsentRequestScopeImpl(element));});
        writer.writeCollectionOfObjectValues<AppConsentRequestScopeImpl>("pendingScopes", pendingScopesArrValue);
        }
        if(this.userConsentRequests && this.userConsentRequests.length != 0){        const userConsentRequestsArrValue: UserConsentRequestImpl[] = []; this.userConsentRequests?.forEach(element => {userConsentRequestsArrValue.push(new UserConsentRequestImpl(element));});
        writer.writeCollectionOfObjectValues<UserConsentRequestImpl>("userConsentRequests", userConsentRequestsArrValue);
        }
    };
}

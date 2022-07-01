import {AppConsentApprovalRoute} from './appConsentApprovalRoute';
import {AppConsentRequest} from './appConsentRequest';
import {createAppConsentRequestFromDiscriminatorValue} from './createAppConsentRequestFromDiscriminatorValue';
import {AppConsentRequestImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AppConsentApprovalRouteImpl extends EntityImpl implements AppConsentApprovalRoute {
    /** A collection of userConsentRequest objects for a specific application. */
    private _appConsentRequests?: AppConsentRequest[] | undefined;
    /**
     * Gets the appConsentRequests property value. A collection of userConsentRequest objects for a specific application.
     * @returns a AppConsentRequestInterface
     */
    public get appConsentRequests() {
        return this._appConsentRequests;
    };
    /**
     * Sets the appConsentRequests property value. A collection of userConsentRequest objects for a specific application.
     * @param value Value to set for the appConsentRequests property.
     */
    public set appConsentRequests(value: AppConsentRequest[] | undefined) {
        if(value) {
            const appConsentRequestsArrValue: AppConsentRequestImpl[] = [];
            this.appConsentRequests?.forEach(element => {
                appConsentRequestsArrValue.push((element instanceof AppConsentRequestImpl? element as AppConsentRequestImpl:new AppConsentRequestImpl(element)));
            });
            this._appConsentRequests = appConsentRequestsArrValue;
        }
    };
    /**
     * Instantiates a new appConsentApprovalRoute and sets the default values.
     * @param appConsentApprovalRouteParameterValue 
     */
    public constructor(appConsentApprovalRouteParameterValue?: AppConsentApprovalRoute | undefined) {
        super(appConsentApprovalRouteParameterValue);
        this._appConsentRequests = appConsentApprovalRouteParameterValue?.appConsentRequests;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appConsentRequests": n => { this.appConsentRequests = n.getCollectionOfObjectValues<AppConsentRequestImpl>(createAppConsentRequestFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appConsentRequests && this.appConsentRequests.length != 0){        const appConsentRequestsArrValue: AppConsentRequestImpl[] = [];
        this.appConsentRequests?.forEach(element => {
            appConsentRequestsArrValue.push((element instanceof AppConsentRequestImpl? element as AppConsentRequestImpl:new AppConsentRequestImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AppConsentRequestImpl>("appConsentRequests", appConsentRequestsArrValue);
        }
    };
}

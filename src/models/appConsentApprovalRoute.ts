import {createAppConsentRequestFromDiscriminatorValue} from './createAppConsentRequestFromDiscriminatorValue';
import {AppConsentRequest, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppConsentApprovalRoute extends Entity implements Parsable {
    /** A collection of userConsentRequest objects for a specific application. */
    private _appConsentRequests?: AppConsentRequest[] | undefined;
    /**
     * Gets the appConsentRequests property value. A collection of userConsentRequest objects for a specific application.
     * @returns a appConsentRequest
     */
    public get appConsentRequests() {
        return this._appConsentRequests;
    };
    /**
     * Sets the appConsentRequests property value. A collection of userConsentRequest objects for a specific application.
     * @param value Value to set for the appConsentRequests property.
     */
    public set appConsentRequests(value: AppConsentRequest[] | undefined) {
        this._appConsentRequests = value;
    };
    /**
     * Instantiates a new AppConsentApprovalRoute and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.appConsentApprovalRoute";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appConsentRequests": n => { this.appConsentRequests = n.getCollectionOfObjectValues<AppConsentRequest>(createAppConsentRequestFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AppConsentRequest>("appConsentRequests", this.appConsentRequests);
    };
}

import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DelegatedAdminServiceManagementDetail extends Entity implements Parsable {
    /** The serviceManagementUrl property */
    private _serviceManagementUrl?: string | undefined;
    /** The serviceName property */
    private _serviceName?: string | undefined;
    /**
     * Instantiates a new delegatedAdminServiceManagementDetail and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "serviceManagementUrl": n => { this.serviceManagementUrl = n.getStringValue(); },
            "serviceName": n => { this.serviceName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("serviceManagementUrl", this.serviceManagementUrl);
        writer.writeStringValue("serviceName", this.serviceName);
    };
    /**
     * Gets the serviceManagementUrl property value. The serviceManagementUrl property
     * @returns a string
     */
    public get serviceManagementUrl() {
        return this._serviceManagementUrl;
    };
    /**
     * Sets the serviceManagementUrl property value. The serviceManagementUrl property
     * @param value Value to set for the serviceManagementUrl property.
     */
    public set serviceManagementUrl(value: string | undefined) {
        this._serviceManagementUrl = value;
    };
    /**
     * Gets the serviceName property value. The serviceName property
     * @returns a string
     */
    public get serviceName() {
        return this._serviceName;
    };
    /**
     * Sets the serviceName property value. The serviceName property
     * @param value Value to set for the serviceName property.
     */
    public set serviceName(value: string | undefined) {
        this._serviceName = value;
    };
}

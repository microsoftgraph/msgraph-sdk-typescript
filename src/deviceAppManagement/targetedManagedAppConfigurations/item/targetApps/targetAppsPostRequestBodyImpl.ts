import {ManagedMobileAppImpl} from '../../../../models/';
import {createManagedMobileAppFromDiscriminatorValue} from '../../../../models/createManagedMobileAppFromDiscriminatorValue';
import {ManagedMobileApp} from '../../../../models/managedMobileApp';
import {TargetedManagedAppGroupType} from '../../../../models/targetedManagedAppGroupType';
import {TargetAppsPostRequestBody} from './targetAppsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the targetApps method. */
export class TargetAppsPostRequestBodyImpl implements TargetAppsPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The appGroupType property */
    private _appGroupType?: TargetedManagedAppGroupType | undefined;
    /** The apps property */
    private _apps?: ManagedMobileApp[] | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the appGroupType property value. The appGroupType property
     * @returns a targetedManagedAppGroupType
     */
    public get appGroupType() {
        return this._appGroupType;
    };
    /**
     * Sets the appGroupType property value. The appGroupType property
     * @param value Value to set for the appGroupType property.
     */
    public set appGroupType(value: TargetedManagedAppGroupType | undefined) {
        if(value) {
            this._appGroupType = value;
        }
    };
    /**
     * Gets the apps property value. The apps property
     * @returns a ManagedMobileAppInterface
     */
    public get apps() {
        return this._apps;
    };
    /**
     * Sets the apps property value. The apps property
     * @param value Value to set for the apps property.
     */
    public set apps(value: ManagedMobileApp[] | undefined) {
        if(value) {
            const appsArrValue: ManagedMobileAppImpl[] = [];
            this.apps?.forEach(element => {
                appsArrValue.push((element instanceof ManagedMobileAppImpl? element:new ManagedMobileAppImpl(element)));
            });
            this._apps = appsArrValue;
        }
    };
    /**
     * Instantiates a new targetAppsPostRequestBody and sets the default values.
     * @param targetAppsPostRequestBodyParameterValue 
     */
    public constructor(targetAppsPostRequestBodyParameterValue?: TargetAppsPostRequestBody | undefined) {
        this._additionalData = targetAppsPostRequestBodyParameterValue?.additionalData ? targetAppsPostRequestBodyParameterValue?.additionalData! : {};
        this._appGroupType = targetAppsPostRequestBodyParameterValue?.appGroupType;
        this._apps = targetAppsPostRequestBodyParameterValue?.apps;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "appGroupType": n => { this.appGroupType = n.getEnumValue<TargetedManagedAppGroupType>(TargetedManagedAppGroupType); },
            "apps": n => { this.apps = n.getCollectionOfObjectValues<ManagedMobileAppImpl>(createManagedMobileAppFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.appGroupType){
            writer.writeEnumValue<TargetedManagedAppGroupType>("appGroupType", this.appGroupType);
        }
        if(this.apps && this.apps.length != 0){        const appsArrValue: ManagedMobileAppImpl[] = [];
        this.apps?.forEach(element => {
            appsArrValue.push((element instanceof ManagedMobileAppImpl? element:new ManagedMobileAppImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedMobileAppImpl>("apps", appsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}

'use strict';var _0x37d446=_0x2313;(function(_0x289964,_0x373402){var _0x3dea50=_0x2313,_0x97b23a=_0x289964();while(!![]){try{var _0x3bd693=-parseInt(_0x3dea50(0x10d))/0x1*(-parseInt(_0x3dea50(0x11a))/0x2)+-parseInt(_0x3dea50(0x122))/0x3*(-parseInt(_0x3dea50(0x11d))/0x4)+-parseInt(_0x3dea50(0x125))/0x5+parseInt(_0x3dea50(0x113))/0x6*(parseInt(_0x3dea50(0x10e))/0x7)+parseInt(_0x3dea50(0x120))/0x8*(parseInt(_0x3dea50(0x12a))/0x9)+parseInt(_0x3dea50(0x129))/0xa+parseInt(_0x3dea50(0x128))/0xb*(-parseInt(_0x3dea50(0x114))/0xc);if(_0x3bd693===_0x373402)break;else _0x97b23a['push'](_0x97b23a['shift']());}catch(_0x1d2469){_0x97b23a['push'](_0x97b23a['shift']());}}}(_0x4833,0x8e70e));function _0x2313(_0x882f58,_0x5d7309){var _0x483319=_0x4833();return _0x2313=function(_0x231373,_0x2299d1){_0x231373=_0x231373-0x10c;var _0x43dbb5=_0x483319[_0x231373];return _0x43dbb5;},_0x2313(_0x882f58,_0x5d7309);}var __decorate=this&&this[_0x37d446(0x111)]||function(_0x41fd1a,_0x5cf4eb,_0x16fde8,_0x1fb4ca){var _0x232286=_0x37d446,_0x4cad31=arguments[_0x232286(0x11e)],_0x56e197=_0x4cad31<0x3?_0x5cf4eb:_0x1fb4ca===null?_0x1fb4ca=Object['getOwnPropertyDescriptor'](_0x5cf4eb,_0x16fde8):_0x1fb4ca,_0x285774;if(typeof Reflect===_0x232286(0x118)&&typeof Reflect[_0x232286(0x11c)]===_0x232286(0x112))_0x56e197=Reflect['decorate'](_0x41fd1a,_0x5cf4eb,_0x16fde8,_0x1fb4ca);else{for(var _0x19f7b4=_0x41fd1a[_0x232286(0x11e)]-0x1;_0x19f7b4>=0x0;_0x19f7b4--)if(_0x285774=_0x41fd1a[_0x19f7b4])_0x56e197=(_0x4cad31<0x3?_0x285774(_0x56e197):_0x4cad31>0x3?_0x285774(_0x5cf4eb,_0x16fde8,_0x56e197):_0x285774(_0x5cf4eb,_0x16fde8))||_0x56e197;}return _0x4cad31>0x3&&_0x56e197&&Object[_0x232286(0x10c)](_0x5cf4eb,_0x16fde8,_0x56e197),_0x56e197;},__metadata=this&&this[_0x37d446(0x11b)]||function(_0x416c1f,_0x28bdb2){var _0x1e4ca3=_0x37d446;if(typeof Reflect===_0x1e4ca3(0x118)&&typeof Reflect[_0x1e4ca3(0x11f)]===_0x1e4ca3(0x112))return Reflect['metadata'](_0x416c1f,_0x28bdb2);};function _0x4833(){var _0x5a66fa=['object','createdAt','2wlQZQp','__metadata','decorate','1304qjurEE','length','metadata','71296USxbCM','BaseEntity','6378ImxHte','NoticeBoardEntity','PrimaryGeneratedColumn','4791255TqXBCB','CreateDateColumn','content','14571799woaCKw','3633730ljJaDC','747aVdnnJ','varchar','UpdateDateColumn','defineProperty','602731AMoHCx','14IVLJKg','typeorm','Column','__decorate','function','1402566jwmxGy','12LDDXFI','notice_board','prototype','design:type'];_0x4833=function(){return _0x5a66fa;};return _0x4833();}Object[_0x37d446(0x10c)](exports,'__esModule',{'value':!![]}),exports['NoticeBoardEntity']=void 0x0;const typeorm_1=require(_0x37d446(0x10f)),baseEntity_1=require('../../../common/entity/baseEntity');let NoticeBoardEntity=class NoticeBoardEntity extends baseEntity_1[_0x37d446(0x121)]{};__decorate([(0x0,typeorm_1[_0x37d446(0x124)])(),__metadata(_0x37d446(0x117),Number)],NoticeBoardEntity[_0x37d446(0x116)],'id',void 0x0),__decorate([(0x0,typeorm_1[_0x37d446(0x110)])({'type':_0x37d446(0x12b),'length':0xff,'unique':!![],'nullable':!![]}),__metadata('design:type',String)],NoticeBoardEntity[_0x37d446(0x116)],'title',void 0x0),__decorate([(0x0,typeorm_1[_0x37d446(0x110)])({'type':'varchar','length':0xff,'nullable':!![]}),__metadata(_0x37d446(0x117),String)],NoticeBoardEntity['prototype'],'tags',void 0x0),__decorate([(0x0,typeorm_1[_0x37d446(0x110)])({'type':'text','nullable':!![]}),__metadata(_0x37d446(0x117),String)],NoticeBoardEntity[_0x37d446(0x116)],_0x37d446(0x127),void 0x0),__decorate([(0x0,typeorm_1[_0x37d446(0x110)])({'default':0x0}),__metadata('design:type',Number)],NoticeBoardEntity['prototype'],'order',void 0x0),__decorate([(0x0,typeorm_1[_0x37d446(0x126)])(),__metadata(_0x37d446(0x117),Date)],NoticeBoardEntity['prototype'],_0x37d446(0x119),void 0x0),__decorate([(0x0,typeorm_1[_0x37d446(0x12c)])(),__metadata(_0x37d446(0x117),Date)],NoticeBoardEntity['prototype'],'updatedAt',void 0x0),__decorate([(0x0,typeorm_1['DeleteDateColumn'])({'name':'deletedAt','nullable':!![]}),__metadata(_0x37d446(0x117),Date)],NoticeBoardEntity[_0x37d446(0x116)],'deletedAt',void 0x0),NoticeBoardEntity=__decorate([(0x0,typeorm_1['Entity'])({'name':_0x37d446(0x115)})],NoticeBoardEntity),exports[_0x37d446(0x123)]=NoticeBoardEntity;